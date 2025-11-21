"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("gallery") ?? "products";
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("gallery", filter);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="mx-2 my-5 flex justify-center gap-10">
      <FilterButton
        filter="products"
        activeFilter={activeFilter}
        handleClick={handleClick}
      >
        Products
      </FilterButton>
      <FilterButton
        handleClick={handleClick}
        filter="company"
        activeFilter={activeFilter}
      >
        Company
      </FilterButton>
    </div>
  );
}

function FilterButton({ children, activeFilter, filter, handleClick }) {
  return (
    <button
      onClick={() => handleClick(filter)}
      className={`mt-6 inline-block cursor-pointer rounded-lg px-2 py-3 font-semibold shadow-lg duration-300 sm:px-6 ${activeFilter === filter ? "text-secondary bg-primary scale-120" : ""}`}
    >
      {children}
    </button>
  );
}

export default Filter;
