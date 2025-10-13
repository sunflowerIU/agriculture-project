import { FaMobileScreenButton } from "react-icons/fa6";

function PhoneNumber() {
  return (
    <div className="bg-secondary text-primary flex flex-row items-center justify-center gap-2 rounded-2xl p-2 text-xs font-semibold sm:text-sm lg:text-lg">
      <FaMobileScreenButton className="text-lg sm:text-xl lg:text-2xl" />
      <span>986126362, 928338434</span>
    </div>
  );
}

export default PhoneNumber;
