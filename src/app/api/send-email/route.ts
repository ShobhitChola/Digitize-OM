import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import crypto from "crypto";

// Define a type for SendGrid errors
interface SendGridError extends Error {
  response?: {
    body?: any;
  };
}

// Set SendGrid API key with a runtime check
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined in environment variables");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Simple email validation regex
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  try {
    const { name, industry, email, businessName, goal } = await req.json();
    console.log("Request body:", { name, industry, email, businessName, goal });

    // If name, industry, and email are provided, validate them and send user/admin emails
    let shouldSendUserAndAdminEmails = false;
    if (name && industry && email) {
      if (typeof name !== "string") {
        return NextResponse.json(
          { success: false, error: "Name must be a string" },
          { status: 400 }
        );
      }
      if (typeof industry !== "string") {
        return NextResponse.json(
          { success: false, error: "Industry must be a string" },
          { status: 400 }
        );
      }
      if (typeof email !== "string" || !isValidEmail(email)) {
        return NextResponse.json(
          { success: false, error: "A valid email is required" },
          { status: 400 }
        );
      }
      shouldSendUserAndAdminEmails = true;
    }

    const token = crypto.randomBytes(16).toString("hex");
    // Include name, industry, and email in the specialOfferUrl as query parameters
    const specialOfferUrl = shouldSendUserAndAdminEmails
      ? `http://localhost:3000/special-offer?token=${token}&name=${encodeURIComponent(name)}&industry=${encodeURIComponent(industry)}&email=${encodeURIComponent(email)}`
      : `http://localhost:3000/special-offer?token=${token}`; // For local testing

    // Send user and admin emails only if name, industry, and email are provided
    if (shouldSendUserAndAdminEmails) {
      // User Email
      const userMsg = {
        to: email,
        from: "pgsharppokengo@gmail.com", // Verified sender email
        subject: "Claim Your $100 in Free YouTube Ads!",
        html: `
          <p>Hi ${name},</p>
          <p>We are excited to offer you $100 in free YouTube ads!</p>
          <p>Click the link below to check your eligibility:</p>
          <a href="${specialOfferUrl}" 
             style="background-color:#1A73E8;color:white;padding:10px 20px;border-radius:5px;text-decoration:none;">
             Claim Your Offer
          </a>
          <p>This offer is valid for a limited time.</p>
          <p>Best, <br/> Digitize OM</p>
        `,
      };

      // Admin Notification Email
      const adminMsg = {
        to: "pgsharppokengo@gmail.com",
        from: "pgsharppokengo@gmail.com",
        subject: "New Form Submission",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      };

      // Send user and admin emails
      await Promise.all([
        sgMail.send(userMsg),
        sgMail.send(adminMsg),
      ]);
      console.log("✅ User and Admin Emails Sent");
    }

    // Special Offer Email (sent only if businessName and goal are provided)
    if (businessName && goal) {
      if (typeof businessName !== "string" || typeof goal !== "string") {
        return NextResponse.json(
          { success: false, error: "Business name and goal must be strings" },
          { status: 400 }
        );
      }
      const specialOfferMsg = {
        to: "shobhitchola1@gmail.com",
        from: "pgsharppokengo@gmail.com",
        subject: "New Special Offer Form Submission",
        html: `
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Goal:</strong> ${goal}</p>
        `,
      };
      await sgMail.send(specialOfferMsg);
      console.log("✅ Special Offer Email Sent");
    } else {
      console.log("⏳ Special Offer Email Skipped");
    }

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error("Unknown error occurred");
    console.error("SendGrid error:", {
      message: err.message,
      stack: err.stack,
      response: (err as SendGridError).response?.body,
      responseString: JSON.stringify((err as SendGridError).response?.body, null, 2),
    });
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}