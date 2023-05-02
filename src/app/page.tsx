"use client";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import download from "downloadjs";
import QuickActions from "./components/QuickActions";
import QR from "./components/QR";
import Inputs from "./components/input/Inputs";
import Logo from "./components/Logo";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(true);

  const handleDownloadQR = async () => {
    const svg = document.getElementById("QR-Code");
    if (!svg) {
      return;
    }
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    ctx?.drawImage(img, 0, 0);

    // Download the PNG file
    const dataUrl = canvas.toDataURL("image/png");
    download(dataUrl, "my-qrcode.png", "image/png");
  };

  return (
    <main className="p-4 min-h-screen flex flex-col gap-12  justify-start items-center">
      <Logo />
      <div className="grid p-4 rounded-lg grid-cols-1 pt-24 gap-6 md:grid-cols-2 w-full">
        <Inputs
          text={text}
          phone={phone}
          setText={setText}
          setPhone={setPhone}
          showPhone={showPhone}
          setShowPhone={setShowPhone}
        />
        <div className="relative flex flex-col gap-6 justify-start p-2 w-full h-full rounded-lg items-end bg-gray-400/20">
          <QuickActions text={text} phone={phone} />
          <p className="break-words text-sm p-2 text-gray-400 w-full">
            {`https://wa.me/${showPhone ? phone : ""}?text=${text
              .replace(/ /g, "%20")
              .replace(/\n\r?/g, "%0a")}`}
          </p>
        </div>
      </div>
      <QR size={200} text={text} phone={showPhone ? phone : ""} />
      <button onClick={handleDownloadQR} className="btn btn-primary gap-4">
        Download
        <ArrowDownCircleIcon className="h-6 w-6" />
      </button>
    </main>
  );
}
