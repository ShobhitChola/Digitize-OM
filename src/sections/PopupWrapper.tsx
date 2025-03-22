"use client";

import { useEffect, useState } from "react";
import EmailPopup from "./EmailPopup";

export default function PopupWrapper() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    };
  }, [showPopup]);

  return showPopup ? <EmailPopup onClose={() => setShowPopup(false)} /> : null;
}
