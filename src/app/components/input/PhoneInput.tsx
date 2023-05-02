import React from "react";
import PhoneInput from "react-phone-input-2";

type Props = {
  phone: string;
  setPhone: (phone: string) => void;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const Phone = ({ phone, setPhone, checked, setChecked }: Props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <div className="relative">
          <PhoneInput
            disabled={!checked}
            country={"il"}
            placeholder="Enter Phone Number"
            inputClass="text-black bg-blue-600"
            dropdownClass="text-black bg-gray-900"
            value={phone}
            onChange={(e) => setPhone(e)}
          />
          {!checked && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-400/50 dark:bg-black/70 rounded-sm"></div>
          )}
        </div>
      </div>
      <input
        type="checkbox"
        className="toggle"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default Phone;
