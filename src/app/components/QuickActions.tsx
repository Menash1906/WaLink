import "react-tooltip/dist/react-tooltip.css";
import {
  ClipboardDocumentIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

type Props = {
  phone: string;
  text: string;
};

const QuickActions = ({ text, phone }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://wa.me/${phone}?text=${text
        .replace(/ /g, "%20")
        .replace(/\n\r?/g, "%0a")}`
    );
  };
  return (
    <div className="btn-group">
      <button id="copy" className="copy btn" onClick={handleCopy}>
        <ClipboardDocumentIcon className="h-6 w-6" />
      </button>
      <Tooltip
        variant="dark"
        anchorSelect=".copy"
        content="Copied!"
        openOnClick
      />
      <Link
        prefetch={false}
        target="_blank"
        className="btn"
        href={`https://wa.me/${phone}?text=${text
          .replace(/ /g, "%20")
          .replace(/\n\r?/g, "%0a")}`}
      >
        <PaperClipIcon className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default QuickActions;
