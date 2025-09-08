import Link from "next/link";

const TermsText = () => {
  return (
    <p className="mb-3 text-xs text-dark-light">
      By continuing, you expressly acknowledge that you have read and agreed to
      our{" "}
      <Link href="/" className="text-secondary font-semibold">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="/" className="text-secondary font-semibold">
        Privacy & Legal Policy
      </Link>
      .
    </p>
  );
};

export default TermsText;
