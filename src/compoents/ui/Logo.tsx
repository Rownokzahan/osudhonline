import { GiMedicalPack } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="size-max relative z-0">
      <GiMedicalPack size={30} className="text-success" />
      <span className="block absolute -z-10 left-1/2 top-1/2 -translate-1/2 size-5 bg-light" />
    </div>
  );
};

export default Logo;
