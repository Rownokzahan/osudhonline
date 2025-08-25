import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";

interface NavigationButtonProps {
  position: "next" | "prev";
  onClick?: () => void;
  disbaled: boolean;
}

const NavigationButton = ({
  position,
  onClick,
  disbaled,
}: NavigationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disbaled}
      aria-label={position === "prev" ? "Previous slide" : "Next slide"}
      className={clsx(
        "size-12 border rounded-full grid bg-white absolute top-1/2 -translate-y-1/2",
        {
          "left-4": position === "prev",
          "right-4": position === "next",
        },
        "disabled:hidden"
      )}
    >
      <MdKeyboardArrowRight
        size={24}
        className={clsx(
          "text-secondary place-self-center",
          position === "prev" && "rotate-180"
        )}
      />
    </button>
  );
};

export default NavigationButton;
