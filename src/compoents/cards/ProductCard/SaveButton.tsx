import { CiBookmark } from "react-icons/ci";

interface SaveButtonProps {
  productId: string;
}

const SaveButton = ({}: SaveButtonProps) => {
  return (
    <button>
      <CiBookmark size={24} className="text-dark-light" />
    </button>
  );
};

export default SaveButton;
