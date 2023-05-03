import React from "react";
import QRCode from "react-qr-code";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import download from "downloadjs";

type Props = {
  phone: string;
  text: string;
  size?: number;
};
const QR = ({ phone, text, size = 250 }: Props) => {
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
    <div className="flex flex-col gap-12 justify-center items-center p-12">
      <QRCode
        size={size}
        id="QR-Code"
        value={`https://wa.me/${phone}?text=${text
          .replace(/ /g, "%20")
          .replace(/\n\r?/g, "%0a")}`}
      />
      <button onClick={handleDownloadQR} className="btn btn-primary gap-4">
        Download
        <ArrowDownCircleIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default QR;
