import React from "react";
import { LinkButtonType } from "../data/linkData";

export const LinkButton = ({ label, href }: LinkButtonType) => {
  return (
    <>
      <a
        href={href || "#"}
        target={href? "_blank" : undefined}
        rel={href? "noopener noreferrer" : undefined}
        className="w-75 h-10 rounded-md text-[12px] font-semibold bg-gray-700 hover:text-black hover:bg-sub-green cursor-pointer flex items-center justify-center transition-colors"
      >
        {label}
      </a>
    </>
  );
};
