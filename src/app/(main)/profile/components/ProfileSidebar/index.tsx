import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import AccountMenu from "./AccountMenu";

const ProfileSidebar = () => {
  return (
    <aside className="hidden lg:block space-y-4">
      <h2 className="mb-5 text-2xl font-black ps-1">My Account</h2>

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
    </aside>
  );
};

export default ProfileSidebar;