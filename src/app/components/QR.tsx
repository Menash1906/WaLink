import React from "react";
import QRCode from "react-qr-code";

type Props = {
  phone: string;
  text: string;
  size?: number;
};
const QR = ({ phone, text, size = 250 }: Props) => {
  return (
    <QRCode
      size={size}
      id="QR-Code"
      value={`https://wa.me/${phone}?text=${text
        .replace(/ /g, "%20")
        .replace(/\n\r?/g, "%0a")}`}
    />
  );
};

export default QR;
