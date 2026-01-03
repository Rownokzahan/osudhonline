import { HiMiniXMark } from "react-icons/hi2";
import clsx from "clsx";
import AddAddressForm from "./AddAddressForm";

interface AddAddressDrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const AddAddressDrawer = ({ isOpen, closeDrawer }: AddAddressDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => closeDrawer()}
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "h-dvh max-w-full w-md bg-white",
          "fixed top-0 right-0 z-50 transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-16 px-6 py-2 shadow-md flex justify-between items-center">
          <h3 className="text-2xl font-black">Add Address</h3>

          <button onClick={() => closeDrawer()}>
            <HiMiniXMark size={32} className="text-secondary" />
          </button>
        </div>

        <AddAddressForm />
      </div>
    </>
  );
};

export default AddAddressDrawer;
