import clsx from "clsx";
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
    <div className="grid relative">
      <label htmlFor={id} className="text-sm font-medium text-dark-light/80">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registerProps}
        className={clsx(
          "py-1 border-b-2 outline-none transition-colors duration-300",
          "placeholder:text-gray-300 placeholder:font-light",
          error
            ? "border-b-red-500"
            : "border-b-gray-200 focus-visible:border-b-secondary"
        )}
      />

      {error && (
        <p className="mt-0.5 text-red-500 text-xs absolute top-full h-0">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
