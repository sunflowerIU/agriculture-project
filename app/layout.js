import Navigation from "@/app/_components/Navigation";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap", // Optional: Controls how the font is displayed while loading
  variable: "--font-poppins", // Optional: Define a CSS variable for the font
});
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    default: process.env.NEXT_PUBLIC_COMPANY_NAME,
  },
  description: `Welcome to ${process.env.NEXT_PUBLIC_COMPANY_NAME}. Nepal’s trusted provider of high-quality Corn Silage and CornMeal Silage. Explore our premium products and boost livestock productivity.`,
  keywords: [
    "Corn Silage Nepal",
    "Quality CornMeal Silage",
    "Livestock Feed",
    "Premium Silage Supplier",
    "Best Corn Silage",
  ],
  openGraph: {
    title: `Premium Corn Silage & CornMeal | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description:
      "Discover high-quality Corn Silage and CornMeal Silage from Nepal Silage Seller. Ensuring superior nutrition for livestock.",
    siteName: process.env.NEXT_PUBLIC_COMPANY_NAME,
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_COMPANY_NAME} cover page`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="bg-secondary">
        <Navigation />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
