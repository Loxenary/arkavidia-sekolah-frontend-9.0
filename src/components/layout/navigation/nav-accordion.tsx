import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export const NavAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full gap-5 flex flex-col lg:hidden">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="font-bold text-lg border-0 py-0">
          Event
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-6 text-lg py-5">
            <li>
              <Link href={"/academy"}>Arkavidia Academy</Link>
            </li>
            <li>
              <Link href={"/academy"}>Arkavidia For Indonesia</Link>
            </li>
            <li>
              <Link href={"/academy"}>Arkavidia Goes To School</Link>
            </li>
            <li>
              <Link href={"/academy"}>Arkavidia Talks</Link>
            </li>
            <li>
              <Link href={"/academy"}>IT Fest</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="text-lg border-0">
        <AccordionTrigger className="font-bold border-0 text-lg py-0">
          Competition
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-6 text-lg py-5">
            <li>
              <Link href={"/academy"}>Competitive Programming</Link>
            </li>
            <li>
              <Link href={"/academy"}>Datavidia</Link>
            </li>
            <li>
              <Link href={"/academy"}>Arkalogica</Link>
            </li>
            <li>
              <Link href={"/academy"}>UXvidia</Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
