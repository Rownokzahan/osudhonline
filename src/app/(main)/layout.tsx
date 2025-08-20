import Navbar from "@/compoents/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
