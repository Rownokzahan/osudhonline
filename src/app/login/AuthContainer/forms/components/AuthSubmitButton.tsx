interface AuthSubmitButtonProps {
  label: string;
}

const AuthSubmitButton = ({ label }: AuthSubmitButtonProps) => {
  return (
    <button className="w-full h-14 px-4 py-3 rounded-full bg-primary text-dark-primary font-bold">
      {label}
    </button>
  );
};

export default AuthSubmitButton;
