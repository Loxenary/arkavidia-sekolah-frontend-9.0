import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const NavAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full lg:hidden">
      <AccordionItem value="item-1">
        <AccordionTrigger>Event</AccordionTrigger>
        <AccordionContent>
          <ul>
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
      <AccordionItem value="item-2">
        <AccordionTrigger>Competition</AccordionTrigger>
        <AccordionContent>
          <ul>
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
