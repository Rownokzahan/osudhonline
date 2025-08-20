import Navbar from "@/compoents/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-17 lg:pt-30 lg:pb-0">{children}</main>
    </>
  );
};

export default MainLayout;
