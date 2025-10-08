import Button from "./Button";
import PhoneNumber from "./PhoneNumber";
import SocialMedia from "./SocialMedia";

function ContactFooter() {
  return (
    <section className="space-y-2.5 bg-green-800 py-16 text-center text-lime-50">
      <h2 className="text-3xl font-bold">Contact Us Now</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-lime-100">
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
