import Navigation from "@/app/_components/Navigation";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: `%s | ${process.env.COMPANY_NAME}`,
    default: process.env.COMPANY_NAME,
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
