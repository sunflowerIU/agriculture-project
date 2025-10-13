export const metadata = {
  title: "Product Gallery",
  description:
    "Browse our gallery of premium products including Corn Silage, CornMeal Silage, and livestock feed solutions.",
  keywords: [
    "Corn Silage Gallery",
    "CornMeal Silage Gallery",
    "Livestock Feed Products",
    "Silage Images Nepal",
  ],
  openGraph: {
    title: `Product Gallery | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description:
      "Take a closer look at our high-quality Corn Silage and CornMeal Silage products in our gallery.",
    url: "/gallery",
    images: [
      {
        url: "/fodder.jpg",
        width: 1200,
        height: 630,
        alt: "Product Gallery",
      },
    ],
    type: "website",
  },
};

import { Suspense } from "react";
import GalleryGrid from "../_components/GalleryGrid";
import Spinner from "../_components/Spinner";

export default function Gallery() {
  return (
    <div className="bg-secondary min-h-screen py-6 text-xs sm:py-8 sm:text-sm lg:py-10 lg:text-lg">
      {/* Page Header */}
      <section className="mb-10 text-center">
        <h1 className="text-primary mb-4 text-base leading-tight font-bold sm:text-3xl lg:text-5xl">
          Our Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Explore our collection of premium products. Each item is crafted with
          care and passion to deliver the best quality.
        </p>
      </section>

      {/* gallery grid */}
      <Suspense fallback={<Spinner />}>
        <GalleryGrid />
      </Suspense>
    </div>
  );
}
