import { HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

interface AuthInputProps {
  Icon: IconType;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

const AuthInput = ({ Icon, id, type, placeholder }: AuthInputProps) => {
  return (
    <label
      htmlFor={id}
      className="py-2 border-b border-dark-light/60 flex items-center gap-2"
    >
      <Icon size={20} className="text-dark-light/60" />

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full outline-0"
      />
    </label>
  );
};

export default AuthInput;
