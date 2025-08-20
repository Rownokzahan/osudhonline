import type { Metadata } from "next";
import "@/styles/index.css";
import clsx from "clsx";
import { roboto } from "@/fonts";

export const metadata: Metadata = {
  title: "Osudhonline",
  description:
    "Osudhonline – Your trusted source for medicines and self-care essentials.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "antialiased bg-white")}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
