"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import ContactFooter from "./ContactFooter";
import MemberSection from "./TeamSection";
import Testimonials from "./Testimonials";

const teamMembers = [
  {
    id: 5,
    name: " Gopal Thapa",
    gender: "male",
    position: "Managing Director",
    img: "/team/gopal.jpg",
  },

  {
    id: 2,
    name: "Sunil Pandey",
    gender: "male",
    position: "Production Manager",
    img: "/team/prodManager.jpg",
    phone: "9855089486",
  },
  {
    id: 6,
    name: "Subhadra Pandey Thapa",
    gender: "female",
    position: "Finance Head",
    img: "/team/subhadra-pandey.jpg",
  },
  {
    id: 1,
    name: "Krishna Thapa",
    gender: "male",
    position: "Technical Head",
    img: "/team/technicalHead.jpg",
  },

  {
    id: 3,
    name: "Gokarna Budhathoki",
    gender: "male",
    position: "Plant Assistant",
    img: "/team/plantAssistant.jpg",
  },
];

const boardMembers = [
  {
    id: 1,
    name: " Shivji Prasad Kalwar",
    gender: "male",
    position: "Chairman",
    img: "/team/chairman.jpg",
  },
  {
    id: 2,
    name: " Janak Sharma Poudyel",
    gender: "male",
    position: "Director",
    img: "/team/janak.jpg",
  },
  {
    id: 3,
    name: " Navraj Simkhada",
    gender: "male",
    position: "Director",
    img: "/team/navraj.jpg",
    prefix: "Dr",
  },
  {
    id: 5,
    name: " Gopal Thapa",
    gender: "male",
    position: "Managing Director",
    img: "/team/gopal.jpg",
  },
  {
    id: 4,
    name: " Ang Phurba Sherpa",
    gender: "male",
    position: "Director",
    img: "/team/phurba.jpg",
  },
];

function AboutContent() {
  return (
    <div className="text-text space-y-20 text-xs sm:text-sm lg:text-lg">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 py-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base font-bold sm:text-3xl lg:text-5xl"
        >
          About Us
        </motion.h1>
        <p className="mx-auto mt-4 max-w-3xl text-lime-100">
          We are committed to delivering quality and building trust with our
          customers through innovation, excellence, and sustainability.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-700">
            To provide high-quality products and services that bring value to
            our clients and positively impact communities. We believe in
            sustainable practices and long-term growth for all stakeholders.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
            Our Vision
          </h2>
          <p className="leading-relaxed text-gray-700">
            To be recognized as a trusted leader in our industry, setting new
            standards for innovation, integrity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* board members */}
      <MemberSection memberList={boardMembers} heading="Board Members" />
      {/* Team Section */}
      <MemberSection memberList={teamMembers} heading="Meet Our Team" />

      {/* Testimonials */}
      <Testimonials />

      {/* Careers Section */}
      <section className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h2 className="mb-4 text-xl font-bold text-green-900 sm:text-2xl lg:text-3xl">
          Join Our Team
        </h2>
        <p className="mb-6 text-gray-700">
          We are always looking for passionate and talented individuals to join
          our growing team. If you are driven by innovation and want to make a
          difference in the agriculture industry, explore our career
          opportunities.
        </p>
        <div className="flex justify-center">
          <Button href="/career">Explore Careers</Button>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}

export default AboutContent;
