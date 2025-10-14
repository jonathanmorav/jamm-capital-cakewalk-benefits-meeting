import React from "react";
import { motion } from "framer-motion";
import BottomCornerLogo from "./BottomCornerLogo";

interface ContactProps {
  onNavigateNext: () => void;
}

const Contact = (_props: ContactProps) => {
  return (
    <section className="relative min-h-screen bg-white px-4 py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/10 to-brand-lightMint/30" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-3xl border border-brand-blue/15 bg-white/95 p-10 shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-brand-darkBlue md:text-5xl">Let&apos;s Continue the Conversation</h1>
          <p className="mt-4 text-base text-brand-gray md:text-lg">
            For more information please contact Paul Gable (<a href="mailto:paul@cakewalkbenefits.com" className="text-brand-blue hover:underline">paul@cakewalkbenefits.com</a>) and Jonathan Morav (<a href="mailto:jonathan@cakewalkbenefits.com" className="text-brand-blue hover:underline">jonathan@cakewalkbenefits.com</a>).
          </p>
        </motion.div>
      </div>

      <BottomCornerLogo />
    </section>
  );
};

export default Contact;
