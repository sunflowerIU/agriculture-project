"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import ContactFooter from "./ContactFooter";
import MemberSection from "./TeamSection";
import Testimonials from "./Testimonials";

const teamMembers = [
 
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
    status: "Mrs.",
    position: "Company Secretary",
    img: "/team/subhadra-pandey.jpg",
  },
  
  {
    id: 7,
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
    id: 5,
    name: " Gopal Thapa",
    gender: "male",
    position: "Chairman",
    img: "/team/gopal.jpg",
    synopsis:
      "Gopal Thapa is an agribusiness entrepreneur with over 12 years of experience in Nepal's agriculture and livestock sectors. Through sustained engagement with livestock farmers and rural communities, he has focused on raising agricultural productivity, lowering production costs, and advancing the commercialization of farming practices. As Chairman of Progressive Cattle Fodder Industries Ltd., he leads the company's strategy for strengthening Nepal's livestock value chain and modernizing fodder production.",
  },

  {
    id: 1,
    name: " Keshav Bhasyal, PhD",
    gender: "male",
    position: "Director",
    img: "/team/DrKeshavBhasyal.jpeg",
    status: "Dr. ",
    synopsis:
      "Dr. Keshav Bhasyal is an international relations and labour policy expert with over 15 years of experience in policy development, labour migration, employment, and social protection. He holds a PhD in International Relations from Jawaharlal Nehru University and has worked with the ILO, World Bank, Asian Development Bank, the Government of Nepal, and Tribhuvan University on policy reform and institutional development. He has authored numerous policy papers and continues to advise on evidence-based, inclusive economic development.",
  },

  {
    id: 2,
    name: " Surya Prasad Sedhai",
    gender: "male",
    position: "Director",
    img: "/team/SuryaPrasadSedhai.jpeg",
    status: "Mr. ",
    synopsis:
      "Surya Prasad Sedhai is a public administration and governance professional with over 30 years of service in the Government of Nepal, including as Joint Secretary at the Ministry of Home Affairs and National Director of the Nepal National Single Window Project. He led the integration of 47 government agencies to modernize trade facilitation in line with WTO and WCO standards, work recognized with a WCO Certificate of Merit. He holds master's degrees in public administration and law, and is a registered advocate of the Supreme Court of Nepal.",
  },

  {
    id: 3,
    name: " Bidur Prasad Pandit",
    gender: "male",
    status: "Dr. ",
    position: "Director",
    img: "/team/DrBidhurPandit.jpeg",
    synopsis:
      "Dr. Bidur Prasad Pandit is a medical professional and investor with over eight years of experience in investment management across renewable energy, tourism, agriculture, and capital markets. His work spans project financing, investment analysis, and corporate governance, supporting the growth of infrastructure, manufacturing, and hospitality ventures. As a board member, he brings a strategic, investment-focused perspective to the company's long-term growth planning.",
  },
  {
    id: 4,
    name: " Dhiraj Koirala",
    gender: "male",
    status: "Mr. ",
    position: "Director",
    img: "/team/MrDhirajKoirala.jpeg",
    synopsis:
      "Dhiraj Koirala is an international development professional with over 15 years of experience with the United Nations, the International Organization for Migration, and government institutions across Nepal, the United States, Qatar, and Central Africa. He has led humanitarian and electoral operations, including U.S. resettlement programs and governance initiatives in conflict-affected regions. He holds a master's degree in political science and a certificate in peace and conflict management from the U.S. Institute of Peace.",
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
          transition={{ duration: 1 }}
          className="text-base font-bold sm:text-3xl lg:text-5xl"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-4 max-w-3xl text-lime-100"
        >
          We are committed to delivering quality and building trust with our
          customers through innovation, excellence, and sustainability.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="leading-relaxed text-gray-700"
          >
            To provide high-quality products and services that bring value to
            our clients and positively impact communities. We believe in
            sustainable practices and long-term growth for all stakeholders.
          </motion.p>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-2 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="leading-relaxed text-gray-700"
          >
            To be recognized as a trusted leader in our industry, setting new
            standards for innovation, integrity, and customer satisfaction.
          </motion.p>
        </div>
      </section>

      {/* board members */}
      <MemberSection memberList={boardMembers} heading="Board Members" />
      {/* Team Section */}
      <MemberSection memberList={teamMembers} heading="Meet Our Team" />

      {/* Testimonials */}
      <Testimonials />

      <ContactFooter />
    </div>
  );
}

export default AboutContent;