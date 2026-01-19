import Image from "next/image";
import { LinkButton } from "./components/LinkButton";
import { linkData } from "./data/linkData";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white max-w-sm w-[90%] md:max-w-md p-6 bg-gray-800 flex flex-col items-center gap-5 rounded-lg">
        <div className="mt-12.5">
          <Image
            alt="profile"
            width={90}
            height={75}
            src={"/images/avatar-jessica.jpeg"}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="text-[20px] font-semibold">Jessica Randall</div>
          <div className="text-[12px] font-semibold text-sub-green">
            London, United Kingdom
          </div>
        </div>
        <div className="text-[12px]">
          "Front-end developer and avid reader."
        </div>
        <div className="flex flex-col gap-5">
          {linkData.map((el,index)=> (
            <LinkButton key={index} label={el.label} href={el.href}/>
          ))}
          {/* <button className="w-75 h-8.75 rounded-md text-[12px] font-semibold bg-gray-700 hover:text-black hover:bg-sub-green cursor-pointer">GitHub</button> */}
        </div>
      </div>
    </main>
  );
}
