import React, { useState } from "react";

import TextInput from "./TextInput";
import Phone from "./PhoneInput";

type Props = {
  phone: string;
  text: string;
  showPhone: boolean;
  setPhone: (phone: string) => void;
  setShowPhone: (show: boolean) => void;
  setText: (text: string) => void;
};
const Inputs = ({
  phone,
  text,
  setPhone,
  setText,
  showPhone,
  setShowPhone,
}: Props) => {
  return (
    <div className="flex flex-col gap-4 items-start w-full justify-center">
      <Phone
        phone={phone}
        setPhone={setPhone}
        setChecked={setShowPhone}
        checked={showPhone}
      />
      <TextInput text={text} setText={setText} />
    </div>
  );
};

export default Inputs;
