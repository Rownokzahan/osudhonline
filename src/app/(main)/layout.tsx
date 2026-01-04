import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-17 lg:pt-30 lg:pb-0">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
