import React from "react";

type Props = {
  text: string;
  setText: (text: string) => void;
};
const TextInput = ({ text, setText }: Props) => {
  return (
    <div className="w-full">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="p-2.5 max-h-[50vh] min-h-[20vh] textarea textarea-bordered w-full"
        placeholder="Write your thoughts here..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
