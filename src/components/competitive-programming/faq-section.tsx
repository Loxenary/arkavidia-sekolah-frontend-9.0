import FourDisk from "@images/4-kaset.svg";
import QuestionMark from "@images/question-mark.svg";
import RevertedQuestionMark from "@images/invertedquestionmark.webp";
import ArkavTurbo from "@images/arkav-turbo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";

interface FAQItem {
  title: string;
  description: string;
}

export interface FAQSectionProps {
  faqData: FAQItem[];
}

export const FAQSection = ({ faqData }: FAQSectionProps) => {
  return (
    <section className="relative">
      <div className="w-full absolute bottom-0 left-0 flex items-center justify-center max-lg:hidden z-20">
        <Image src={FourDisk} alt={"4 disks"} className="translate-y-5" />
      </div>
      <div className="px-36 bg-yellow300 py-20 text-center relative items-center overflow-hidden">
        <div className="left-[-15%] absolute bottom-11 z-0 max-lg:hidden">
          <Image src={ArkavTurbo} alt={"Arkav Turbo"} />
        </div>
        <Image
          src={QuestionMark}
          alt={"Question Mark"}
          className="right-[-10%] absolute bottom-11 z-0 max-lg:hidden"
        />

        <div className="left-[-10%] absolute top-0 z-0 max-lg:hidden">
          <Image src={RevertedQuestionMark} alt={"Reverted Question Mark"} />
        </div>

        <h1 className="text-black font-black text-[3.5rem]">F.A.Q</h1>
        <Accordion
          type="multiple"
          className=" w-full flex flex-col gap-5 py-20 z-10 relative"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              className="text-white border rounded-2xl border-black overflow-hidden"
              value={"faq-" + (index + 1)}
            >
              <AccordionTrigger className="bg-black p-5 text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-black p-4 text-left bg-white">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
