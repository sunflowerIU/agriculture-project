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
import Filter from "../_components/Filter";
import GalleryGrid from "../_components/GalleryGrid";
import Spinner from "../_components/Spinner";

export default async function Gallery({ searchParams }) {
  const params = await searchParams;
  const filter = params.gallery ?? "products";
  return (
    <div>
      {/*filter buttons */}
      <Filter />

      {/* gallery grid */}
      <Suspense fallback={<Spinner />}>
        <GalleryGrid filter={filter} />
      </Suspense>
    </div>
  );
}
