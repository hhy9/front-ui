"use client";
import React from "react";
import { LinkButtonType } from "../data/linkData";



export const LinkButton = ({ label, href }: LinkButtonType) => {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className="w-75 h-10 rounded-md text-[12px] font-semibold bg-gray-700 hover:text-black hover:bg-sub-green cursor-pointer">{label}</button>
      </a>
    </>
  );
};
