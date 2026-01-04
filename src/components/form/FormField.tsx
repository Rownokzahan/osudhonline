import { HTMLInputTypeAttribute } from "react";
import { FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  registerProps: any; // passed from useForm register
  error?: FieldError;
}

const FormField = ({
  id,
  type = "text",
  label,
  placeholder,
  registerProps,
  error,
}: FormFieldProps) => {
  return (
    <div className="grid space-y-1 relative">
      <label htmlFor={id} className="text-sm font-medium text-dark-light">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registerProps}
        className={`pb-1 border-b-2 outline-0 duration-300 ${
          error ? "border-red-500" : "focus-visible:border-b-secondary"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm absolute top-full">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
