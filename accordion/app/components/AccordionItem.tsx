"use client";
import React, { useState } from "react";
import { AccordionFaqType } from "../type/faq";

export const AccordionItem = ({ question, answer }: AccordionFaqType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-start gap-4 py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[hsl(292,42%,14%)] font-semibold text-base flex-1 hover:text-purple-700">{question}</p>
        <img
          src={isOpen ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}
          alt="plusIcon"
          className="w-6 h-6 shrink-0"
        />
      </div>
      <p
         className={`text-[hsl(292,16%,49%)] text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
      >
        {answer}
      </p>
      
    </div>
  );
};
