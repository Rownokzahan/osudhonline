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
    <div className="pb-4 flex justify-between">
      {guarantees.map(({ Icon, label }, index) => (
        <div key={index} className="space-y-2">
          <div className="size-12 mx-auto rounded-full bg-accent/10 grid place-items-center">
            <Icon size={28} className="text-accent/50" />
          </div>

          <p className="text-center font-medium text-dark/80 leading-4">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductGuarantees;
