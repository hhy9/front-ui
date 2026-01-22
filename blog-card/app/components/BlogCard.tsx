import Image from "next/image";
import React from "react";
import { BlogCardProps } from "../type/card";

export const BlogCard = ({
  image = "",
  category,
  date,
  title,
  description,
  authorName,
  authorImage="",
}: BlogCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-6 p-6 border-gray-950 border h-auto bg-white rounded-[20px] max-w-81.75 md:max-w-[384px] shadow-[8px_8px_0px_#000000]">
      <div>
        <Image
          src={image}
          alt="cardImage"
          width={280}
          height={200}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="px-3 py-1 text-gray-950 font-extrabold bg-yellow-300 w-fit rounded-sm text-[12px] leading-[150%]">{category}</div>
        <div className="text-[12px] font-medium leading-[150%] text-gray-950">{date}</div>
        <div className="font-extrabold text-[20px] leading-[150%] text-gray-950">{title}</div>
        <div className="text-sm leading-[150%] font-medium text-gray-500">{description}</div>
      </div>
      <div className="flex gap-3 items-center">
        <div>
        <Image src={authorImage} width={32} height={32} alt="authorImage" className=""/>
        </div>
        <div className="font-bold text-sm leading-[150%] text-gray-950">{authorName}</div>
      </div>
    </div>
  );
};
