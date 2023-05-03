"use client";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import QuickActions from "./components/QuickActions";
import QR from "./components/QR";
import Inputs from "./components/input/Inputs";
import Logo from "./components/Logo";

export default function Home() {
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(true);

  return (
    <main className="p-4 max-w-7xl mx-auto">
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
        <div className="flex flex-col gap-6 justify-start p-2 w-full h-full rounded-lg items-end bg-gray-400/20">
          <QuickActions usePhone={showPhone} text={text} phone={phone} />
          <p className="break-words text-sm p-2 text-gray-400 w-full">
            {`https://wa.me/${showPhone ? phone : ""}?text=${text
              .replace(/ /g, "%20")
              .replace(/\n\r?/g, "%0a")}`}
          </p>
        </div>
      </div>
      <QR size={200} text={text} phone={showPhone ? phone : ""} />
    </main>
  );
}
