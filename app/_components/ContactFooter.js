import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import SocialMedia from "./SocialMedia";

function ContactFooter() {
  return (
    <section className="space-y-3 bg-green-800 px-3 py-12 text-center text-xs text-lime-50 sm:text-sm lg:text-lg">
      <h2 className="text-primary text-base font-bold sm:text-3xl lg:text-5xl">
        Contact Us Now
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-lime-100">
        Ready to grow with us? Get in touch today and discover how we can help
        you succeed.
      </p>
      {/* social media buttons */}
      <SocialMedia position="center" />
      <PhoneNumber />
      <Button variant="secondary" href="/contact">
        Contact Us
      </Button>
    </section>
  );
}

export default ContactFooter;
