import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function SocialMedia({ position = "start" }) {
  return (
    <div className="mt-2 min-w-0">
      <h3 className="mb-2 text-xl font-semibold">Follow Us</h3>
      <div
        className={`${position === "start" ? "" : "justify-center"} flex flex-wrap gap-4 text-2xl`}
      >
        <a
          href="#"
          aria-label="Facebook"
          className="transition hover:scale-y-75"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="transition hover:scale-y-75"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          aria-label="Twitter/X"
          className="transition hover:scale-y-75"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="transition hover:scale-y-75"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          aria-label="WhatsApp"
          className="transition hover:scale-y-75"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
