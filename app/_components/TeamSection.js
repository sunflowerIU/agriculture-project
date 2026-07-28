"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ScrollRevealLeftRight from "./ScrollRevealLeftRight";

const EASE = [0.22, 1, 0.36, 1];
const HOVER_OPEN_DELAY = 150;
const HOVER_CLOSE_DELAY = 200;

function MemberModal({ member, onClose, onMouseEnter, onMouseLeave }) {
  const [portalEl, setPortalEl] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setPortalEl(document.body);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (!portalEl) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
      onClick={onClose}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed inset-0 z-50 flex items-center justify-center bg-green-950/60 p-4 backdrop-blur-sm sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${member.status ?? ""}${member.name} — ${member.position}`}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl bg-white text-left shadow-2xl sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-green-900 shadow hover:bg-white"
        >
          <IoClose size={20} />
        </button>

        <div className="flex shrink-0 items-start justify-center bg-green-900/5 p-8 sm:w-1/3">
          <Image
            src={member.img}
            alt={member.position}
            width={200}
            height={200}
            className="h-40 w-40 rounded-full object-cover shadow-md sm:h-48 sm:w-48"
          />
        </div>

        <div className="flex-1 p-8">
          <h3 className="text-xl font-bold text-green-900 sm:text-2xl">
            {member.status}
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-green-700">
            {member.position}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-gray-700 sm:text-base">
            {member.synopsis}
          </p>
        </div>
      </motion.div>
    </motion.div>,
    portalEl,
  );
}

function MemberCard({ member }) {
  const [open, setOpen] = useState(false);
  const hasSynopsis = Boolean(member.synopsis);
  const timeoutRef = useRef(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const openWithDelay = (delay) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => setOpen(true), delay);
  };
  const closeWithDelay = (delay) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => setOpen(false), delay);
  };

  useEffect(() => clearTimer, []);

  // Team members with no bio keep the original static card — untouched.
  if (!hasSynopsis) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-2xl bg-white p-4 text-center shadow-lg"
      >
        <Image
          src={member.img}
          alt={member.position}
          width={120}
          height={120}
          className="mx-auto rounded-full"
        />
        <h3 className="mt-3 font-semibold text-green-800">
          {member.status}
          {member.name}
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          {member.position}
        </p>
        {member.phone && <p>{member.phone}</p>}
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onMouseEnter={() => openWithDelay(HOVER_OPEN_DELAY)}
        onMouseLeave={() => closeWithDelay(HOVER_CLOSE_DELAY)}
        onClick={() => {
          clearTimer();
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            clearTimer();
            setOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        className="cursor-pointer rounded-2xl bg-white p-4 text-center shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      >
        <Image
          src={member.img}
          alt={member.position}
          width={120}
          height={120}
          className="mx-auto rounded-full"
        />
        <h3 className="mt-3 font-semibold text-green-800">
          {member.status}
          {member.name}
        </h3>
        <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
          {member.position}
        </p>
        <p className="mt-2 text-[11px] font-medium text-green-700/70">
          Tap or hover to read bio
        </p>
      </motion.div>

      <AnimatePresence>
        {open && (
          <MemberModal
            member={member}
            onClose={() => {
              clearTimer();
              setOpen(false);
            }}
            onMouseEnter={clearTimer}
            onMouseLeave={() => closeWithDelay(HOVER_CLOSE_DELAY)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MemberSection({ heading, memberList }) {
  return (
    <section className="bg-gray-50 py-6">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-8 text-base font-bold text-green-900 sm:text-2xl lg:text-4xl">
          {heading}
        </h2>
        <ScrollRevealLeftRight className="grid items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
          {memberList.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </ScrollRevealLeftRight>
      </div>
    </section>
  );
}

export default MemberSection;