"use client";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import "react-phone-input-2/lib/style.css";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://wa.me/${phone}?text=${text
        .replace(/ /g, "%20")
        .replace(/\n\r?/g, "%0a")}`
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly mx-auto p-12">
      <div className="relative flex flex-col gap-4 place-items-start  sm:w-[60vw] p-4">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <PhoneInput
          specialLabel="Phone Number:"
          country={"il"}
          placeholder="Enter Phonr Number"
          containerClass=""
          inputClass="text-black"
          dropdownClass="text-black"
          value={phone}
          onChange={(e) => setPhone(e)}
        />
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="p-2.5 w-full max-h-[50vh] min-h-[20vh] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-6 w-full justify-center p-12 rounded-lg items-start relative bg-gray-400/20">
        <p className="break-words text-sm text-gray-400 w-full">
          {`https://wa.me/${phone}?text=${text
            .replace(/ /g, "%20")
            .replace(/\n\r?/g, "%0a")}`}
        </p>
        <Link
          className="text-white"
          href={`https://wa.me/${phone}?text=${text
            .replace(/ /g, "%20")
            .replace(/\n\r?/g, "%0a")}`}
        >
          <PaperClipIcon className="h-6 w-6" />
        </Link>
        <button onClick={handleCopy}>
          <ClipboardDocumentIcon className="h-6 w-6 absolute top-4 right-4" />
        </button>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="flex place-items-center gap-2 p-8 lg:p-0"
          href="https://menash-dev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Michael
        </Link>
      </div>
    </main>
  );
}
