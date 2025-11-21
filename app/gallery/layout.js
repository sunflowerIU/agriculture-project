function layout({ children }) {
  return (
    <div className="bg-secondary min-h-screen py-6 text-center text-xs sm:py-8 sm:text-sm lg:py-10 lg:text-lg">
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

      {children}
    </div>
  );
}

export default layout;
