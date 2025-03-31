import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { name, industry, email, businessName, goal } = await req.json();

    const token = crypto.randomBytes(16).toString("hex");
    const specialOfferUrl = `http://localhost:3000/special-offer?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
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

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "pgsharppokengo@gmail.com",
      subject: "New Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    const specialOfferMailOptions = {
      from: process.env.EMAIL_USER,
      to: "shobhitchola1@gmail.com",
      subject: "New Special Offer Form Submission",
      html: `
        <p><strong>Business Name:</strong> ${businessName || "N/A"}</p>
        <p><strong>Goal:</strong> ${goal || "N/A"}</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(specialOfferMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
