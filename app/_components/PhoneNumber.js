import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const contactDetails = [
  {
    type: "phone",
    contact: process.env.NEXT_PUBLIC_BUSINESS_PHONE,
  },
  {
    type: "email",
    contact: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
  },
];

function PhoneNumber() {
  return (
    <>
      {contactDetails.map((details) => {
        return (
          <div
            key={details.contact}
            className="bg-secondary text-primary flex flex-row items-center justify-center gap-2 rounded-2xl p-2 text-xs font-semibold sm:text-sm lg:text-lg"
          >
            {details.type === "phone" ? (
              <FaMobileScreenButton className="text-lg sm:text-xl lg:text-2xl" />
            ) : (
              <MdOutlineMail />
            )}
            {/* clickable contact */}
            {details.type === "phone" ? (
              <a href={`tel:${details.contact}`}>{details.contact}</a>
            ) : (
              <a href={`mailto:${details.contact}`}>{details.contact}</a>
            )}
          </div>
        );
      })}
    </>
  );
}

export default PhoneNumber;
