"use client";

import { useState } from "react";
import Link from "next/link";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto sm:my-12 sm:px-6 py-8 border-0 sm:border rounded-4xl">
      <div className="mb-4 text-end lg:hidden">
        <Link href={"/"} className="p-2 text-secondary font-bold">
          Skip
        </Link>
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-[40px] font-black inline-block leading-[1em]">
          {isLogin ? "Sign in" : "Create account"}
        </h2>

        <p className="text-sm text-dark-light">
          {isLogin
            ? "Order medicines, beauty & wellness products, book lab tests, consult doctor, and much more."
            : "Join us today and get access to medicines, wellness products, lab tests, and more."}
        </p>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      {/* Switch between login & register */}
      <p className="mt-4 text-center text-sm text-dark-light">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin((prev) => !prev)}
          className="text-secondary font-semibold hover:underline"
        >
          {isLogin ? "Create one" : "Sign in"}
        </button>
      </p>
    </div>
  );
};

export default AuthContainer;
