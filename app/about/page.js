export const metadata = {
  title: "About Us ",
  description: `Learn more about ${process.env.COMPANY_NAME} – a trusted provider of Corn Silage and CornMeal Silage in Nepal. Our mission: quality feed, healthier livestock, happier farmers.`,
  keywords: [
    "About Corn Silage Supplier",
    "Corn Silage Nepal Company",
    "Livestock Feed Supplier",
    `About Us ${process.env.COMPANY_NAME} `,
  ],
  openGraph: {
    title: `About Us | ${process.env.COMPANY_NAME}`,
    description:
      "Discover our journey and commitment to delivering top-quality livestock nutrition in Nepal.",
    images: [
      {
        url: "/fodder.jpg",
        width: 1200,
        height: 630,
        alt: `About Us - ${process.env.COMPANY_NAME}`,
      },
    ],
    type: "profile",
  },
};

import AboutContent from "../_components/AboutContent";

export default function About() {
  return <AboutContent />;
}
