import Navigation from "@/app/_components/Navigation";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: `%s | ${process.env.COMPANY_NAME}`,
    default: process.env.COMPANY_NAME,
  },
  description: `Welcome to ${process.env.COMPANY_NAME}. Nepal’s trusted provider of high-quality Corn Silage and CornMeal Silage. Explore our premium products and boost livestock productivity.`,
  keywords: [
    "Corn Silage Nepal",
    "Quality CornMeal Silage",
    "Livestock Feed",
    "Premium Silage Supplier",
    "Best Corn Silage",
  ],
  openGraph: {
    title: `Premium Corn Silage & CornMeal | ${process.env.COMPANY_NAME}`,
    description:
      "Discover high-quality Corn Silage and CornMeal Silage from Nepal Silage Seller. Ensuring superior nutrition for livestock.",
    siteName: process.env.COMPANY_NAME,
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: `${process.env.COMPANY_NAME} cover page`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.className}`}>
      <body className="bg-secondary">
        <Navigation />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
