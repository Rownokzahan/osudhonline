import { TbMapPinPlus } from "react-icons/tb";
import AddAddressButton from "./components/AddAddressButton";

const AddressPage = () => {
  return (
    <div>
      <h2 className="font-black text-2xl">Delivery addresses</h2>

      <div className="mt-12 text-center">
        <TbMapPinPlus size={120} className="mx-auto" />

        <h3 className="mb-3 mt-4 font-black">
          You don’t have any address saved!
        </h3>

        <p className="text-xs text-dark-light">
          Add a new address to find the best products and offers in your area.
        </p>
      </div>

      <AddAddressButton />
    </div>
  );
};

export default AddressPage;
