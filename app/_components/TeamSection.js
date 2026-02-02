"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollRevealLeftRight from "./ScrollRevealLeftRight";

function MemberSection({ heading, memberList }) {
  return (
    <section className="bg-gray-50 py-6">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-8 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
          {heading}
        </h2>
        <ScrollRevealLeftRight className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {memberList.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white p-4 shadow-lg"
            >
              <Image
                src={member.img}
                alt={member.position}
                width={120}
                height={120}
                className="mx-auto rounded-full"
              />
              <h3 className="mt-3 font-semibold text-green-800">
                {member.prefix
                  ? `${member.prefix}.`
                  : member.gender === "male"
                    ? "Mr. "
                    : "Mrs. "}
                {member.name}
              </h3>
              <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                {member.position}
              </p>
              {member.phone && <p>{member.phone}</p>}
            </motion.div>
          ))}
        </ScrollRevealLeftRight>
      </div>
    </section>
  );
}

export default MemberSection;
