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

interface FAQSectionProps {
  data: FAQItem[];
}

export const FAQSection = ({ data }: FAQSectionProps) => {
  return (
    <section>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem value={"faq-" + (index + 1)}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
