import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQItem {
  title: string;
  description: string;
}

export interface FAQSectionProps {
  faqData: FAQItem[];
}

export const FAQSection = ({ faqData }: FAQSectionProps) => {
  return (
    <section className="px-16 bg-yellow300 py-20 text-center items-center">
      <h1 className="text-black font-black text-[3.5rem]">F.A.Q</h1>
      <Accordion type="multiple" className="w-full flex flex-col gap-5 py-10">
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
    </section>
  );
};
