import { FaMobileScreenButton } from "react-icons/fa6";

function PhoneNumber() {
  return (
    <p className="bg-secondary text-primary flex flex-row items-center justify-center gap-2 rounded-2xl p-2 text-lg">
      <>
        <FaMobileScreenButton />
        <span>986126362, 928338434</span>
      </>
    </p>
  );
}

export default PhoneNumber;
