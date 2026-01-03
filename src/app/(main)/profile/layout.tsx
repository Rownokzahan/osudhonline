import ProfileSidebar from "./components/ProfileSidebar";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className="mt-8 ui-container lg:grid grid-cols-[1fr_2.5fr] gap-8">
      <ProfileSidebar />

      <div className="lg:mt-13">{children}</div>
    </div>
  );
};

export default ProfileLayout;
