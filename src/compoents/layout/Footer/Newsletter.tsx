import { IoArrowForward } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className="max-w-66 space-y-4">
      <h3 className="font-black">SUBSCRIBE TO OUR NEWSLETTER</h3>

      <p className="font-medium text-dark-light">
        Get a free subscription to our health and fitness tip and stay tuned to
        our latest offers
      </p>

      <div className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-2 border-b-2 border-dark-light  flex-1 bg-transparent outline-none font-bold"
        />
        <button className="size-11 rounded-lg bg-teal-200 grid place-items-center">
          <IoArrowForward size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;