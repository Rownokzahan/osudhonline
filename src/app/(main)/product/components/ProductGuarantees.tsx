import { HiEmojiHappy } from "react-icons/hi";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

const guarantees = [
  {
    Icon: TbCalendarTime,
    label: "Expiry on or after Jun 30, 2027",
  },
  {
    Icon: IoIosCloseCircle,
    label: "Return unavailable",
  },
  {
    Icon: IoShieldCheckmark,
    label: "100% Authentic Products",
  },
  {
    Icon: BsPatchCheckFill,
    label: "Quality Checked",
  },
  {
    Icon: HiEmojiHappy,
    label: "Millions of happy customers",
  },
];

const ProductGuarantees = () => {
  return (
    <div className="my-6 pb-1 px-4 md:px-0 flex justify-between overflow-x-auto">
      {guarantees.map(({ Icon, label }, index) => (
        <div key={index} className="space-y-2 min-w-25 max-w-48">
          <div className="size-12 mx-auto rounded-full bg-accent/10 grid place-items-center">
            <Icon size={28} className="text-accent/50" />
          </div>

          <p className="text-center font-medium text-dark/80 leading-4 text-xs md:text-base">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGuarantees;
