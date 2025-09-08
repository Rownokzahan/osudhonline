import Image from "next/image";
import AuthContainer from "./AuthContainer";

const AuthPage = () => {
  return (
    <main className="ui-container sm:min-h-[700px] h-dvh lg:flex justify-between items-center">
      {/* Banner */}
      <figure className="hidden lg:block">
        <Image
          width={484}
          height={466}
          src="https://cdn.netmeds.tech/v2/plain-cake-860195/original/storefront/images/login-banner.png"
          alt="Auth banner"
        />
      </figure>

      <AuthContainer />
    </main>
  );
};

export default AuthPage;
