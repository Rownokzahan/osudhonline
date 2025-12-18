import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import AccountMenu from "./components/AccountMenu";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <div className="my-6 ui-container">
      <h2 className="mb-5 text-2xl font-black">My Account</h2>

      <div className="grid grid-cols-[1fr_2.5fr] gap-8">
        <div className="space-y-4">
          <div className="px-4 py-5 border rounded-3xl flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="size-12 rounded-full bg-accent/15 text-accent grid place-items-center font-bold text-lg">
                JD
              </div>

              <div>
                <h3 className="text-lg font-semibold">Jhon Doe</h3>
                <p className="text-sm text-dark-light">8697741594</p>
              </div>
            </div>

            <Link
              href={"/profile/details"}
              className="py-1 font-bold text-secondary flex items-center gap-1 self-start"
            >
              Edit <FaChevronRight />
            </Link>
          </div>

          <AccountMenu />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
