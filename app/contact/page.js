import { FaEnvelope, FaMapLocationDot, FaPhone } from "react-icons/fa6";
import Form from "../_components/Form";
import SocialMedia from "../_components/SocialMedia";

export const metadata = {
  title: "Contact Us ",
  description:
    "Get in touch with Nepal Silage Seller for inquiries, product details, and orders of Corn Silage & CornMeal Silage in Nepal.",
  keywords: [
    `Contact ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    "Corn Silage Nepal Contact",
    "CornMeal Silage Orders",
    "Livestock Feed Inquiry",
  ],
  openGraph: {
    title: `Contact Us | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description: `Reach out to ${process.env.NEXT_PUBLIC_COMPANY_NAME} for premium Corn Silage and CornMeal Silage products.`,
    images: [
      {
        url: "/profile1.jpg",
        width: 1200,
        height: 630,
        alt: `Contact Us - ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="bg-secondary px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-primary mb-10 text-center text-3xl font-bold">
          Contact Us
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="text-primary rounded-2xl border-1 border-lime-500 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Get in Touch</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope />
                support@nepaldigitalbazar.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhone />
                +977-9800000000
              </li>
              <li className="flex items-center gap-3">
                <FaMapLocationDot />
                Kathmandu, Nepal
              </li>
            </ul>
            {/* Social Media */}

            <SocialMedia />

            <p className="mt-6">
              We’ll get back to you within 24 hours on working days.
            </p>
          </div>

          {/* Contact Form */}
          <Form />
        </div>
      </div>
    </section>
  );
}
