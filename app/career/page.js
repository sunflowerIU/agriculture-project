import Button from "../_components/Button";
export const metadata = {
  title: process.env.NEXT_PUBLIC_COMPANY_NAME,
  description: `Welcome to ${process.env.NEXT_PUBLIC_COMPANY_NAME}. Nepal’s trusted provider of high-quality Corn Silage and CornMeal Silage. Explore our premium products and boost livestock productivity.`,
  keywords: [
    "Corn Silage Nepal",
    "Quality CornMeal Silage",
    "Livestock Feed",
    "Premium Silage Supplier",
    "Best Corn Silage",
    "careers at corn silage company",
    "jobs in agriculture Nepal",
    "farm jobs Nepal",
  ],
  openGraph: {
    title: `Premium Corn Silage & CornMeal | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`,
    description:
      "Discover high-quality Corn Silage and CornMeal Silage from Nepal Silage Seller. Ensuring superior nutrition for livestock.",
    siteName: process.env.NEXT_PUBLIC_COMPANY_NAME,
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_COMPANY_NAME} cover page`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const jobs = [
  {
    title: "Sales & Marketing Officer",
    location: "Kathmandu, Nepal",
    type: "Full Time",
    description:
      "Drive our sales and marketing efforts, build relationships with farmers, and help expand our reach across Nepal.",
  },
  {
    title: "Production Supervisor",
    location: "Chitwan, Nepal",
    type: "Full Time",
    description:
      "Oversee silage production, ensure quality standards, and manage the production team at our facility.",
  },
  {
    title: "Logistics Coordinator",
    location: "Biratnagar, Nepal",
    type: "Full Time",
    description:
      "Coordinate deliveries, manage inventory, and optimize our supply chain for timely distribution.",
  },
];

export default function CareerPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-8">
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <h1 className="text-primary mb-4 text-4xl font-bold sm:text-5xl">
          Join Our Team
        </h1>
        <p className="text-text mb-2 text-lg">
          Be part of Nepal’s leading provider of sustainable feed solutions.
          We’re looking for passionate, driven individuals to help us grow and
          make a difference in agriculture.
        </p>
        <p className="text-text mb-4">
          Explore our open positions below or send us your CV for future
          opportunities.
        </p>
        <Button href="/contact" variant="primary">
          Contact HR
        </Button>
      </div>

      {/* Open Positions */}
      <div className="grid gap-8 md:grid-cols-2">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-xl border border-lime-100 bg-white p-6 shadow-md"
          >
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-green-800">
                {job.title}
              </h2>
              <div className="mb-2 text-sm text-gray-500">
                {job.location} &bull; {job.type}
              </div>
              <p className="text-text mb-4">{job.description}</p>
            </div>
            <Button href="/contact" variant="secondary" className="w-fit">
              Apply Now
            </Button>
          </div>
        ))}
      </div>

      {/* General Application */}
      <div className="mt-12 rounded-xl bg-lime-50 p-6 text-center shadow-sm">
        <h3 className="text-primary mb-2 text-xl font-semibold">
          Didn’t find your role?
        </h3>
        <p className="text-text mb-4">
          We’re always looking for talented people. Send us your CV and we’ll
          reach out when a suitable position opens up.
        </p>
        <Button href="/contact" variant="outline">
          Send CV
        </Button>
      </div>
    </section>
  );
}
