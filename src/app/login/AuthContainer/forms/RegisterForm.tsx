import { MdEmail } from "react-icons/md";
import AuthInput from "./components/AuthInput";
import { RiLockPasswordFill } from "react-icons/ri";
import TermsText from "./components/TermsText";
import AuthSubmitButton from "./components/AuthSubmitButton";

const RegisterForm = () => {
  return (
    <form>
      <div className="h-[170px] mt-4 mb-6 space-y-4">
        <AuthInput
          Icon={MdEmail}
          id="email"
          type="email"
          placeholder="Your Email"
        />
        <AuthInput
          Icon={RiLockPasswordFill}
          id="password"
          type="password"
          placeholder="Password"
        />
        <AuthInput
          Icon={RiLockPasswordFill}
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      <TermsText />

      <AuthSubmitButton label="Register" />
    </form>
  );
};

export default RegisterForm;
