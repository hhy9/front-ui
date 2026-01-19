import Image from "next/image";
import { AccordionItem } from "./components/AccordionItem";
import { accordionFAQs } from "./data/accordionData";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#f9f0ff]">
      <div className="h-80 w-full bg-[url('/images/background-pattern-desktop.svg')] bg-no-repeat bg-cover bg-top"/>
      
      <div className="w-full flex justify-center px-4 -mt-45 pb-20">
          <div className="bg-white w-full max-w-135 rounded-xl shadow-xl px-6 py-10">
            {/* icon + 제목 */}
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/icon-star.svg" alt="star icon" />
              <h1 className="text-[40px] font-bold text-[hsl(292,42%,14%)]">
                FAQs
              </h1>
            </div>
            {/* 아코디언 리스트 */}
            {accordionFAQs.map((faq, index) => (
              <div key={index}>
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
              {accordionFAQs.length -1 !== index && <hr className="border-t border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
    </main>

    

    </>
    
  );
}
