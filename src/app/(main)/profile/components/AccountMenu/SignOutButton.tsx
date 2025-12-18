import { FiLogOut } from "react-icons/fi";

const SignOutButton = () => {
  const handleSignOut = () => {};

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="w-full py-4 flex items-center gap-3 text-red-600"
    >
      <FiLogOut size={23} />
      <span>Sign Out</span>
    </button>
  );
};

export default SignOutButton;
