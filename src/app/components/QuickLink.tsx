import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};
const QuickLink = ({ className }: Props) => {
  return (
    <div className={`p-8 flex gap-2 absolute ${className}`}>
      <p>By </p>
      <Link
      className="link"
        href="https://menash-dev.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Michael
      </Link>
    </div>
  );
};

export default QuickLink;
