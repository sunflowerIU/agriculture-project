import AboutContent from "../_components/AboutContent";

export function generateMetaData() {}

export const metadata = {
  title: "About Us ",
  description: `Learn more about ${process.env.COMPANY_NAME} – a trusted provider of Corn Silage and CornMeal Silage in Nepal. Our mission: quality feed, healthier livestock, happier farmers.`,
  keywords: [
    "About Corn Silage Supplier",
    "Corn Silage Nepal Company",
    "Livestock Feed Supplier",
    "About Us Nepal Silage Seller",
  ],
  openGraph: {
    title: `About Us | ${process.env.COMPANY_NAME}`,
    description:
      "Discover our journey and commitment to delivering top-quality livestock nutrition in Nepal.",
    // url: "https://yourdomain.com/about",
    // images: [
    //   {
    //     url: "/images/about-us.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "About Us - Corn Silage Supplier",
    //   },
    // ],
    type: "profile",
  },
};

export default function About() {
  return <AboutContent />;
}
