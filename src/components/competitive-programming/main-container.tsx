"use client";
import { RemainingTimeProvider } from "@/app/context/remaining-time-context";
import { CompetitiveProgrammingHeader } from "./competitive-header";
import {
  ContactPersonSection,
  ContactPersonSectionProps,
} from "./contact-person-section";
import { FAQSection, FAQSectionProps } from "./faq-section";
import { PrizeSection, PrizeSectionProps } from "./prize-section";
import { RegistrationCountdownSection } from "./registration-countdown-section";
import { TimelineProps, TimelineSection } from "./timeline-section";

export interface CompetitiveProgrammingProps
  extends PrizeSectionProps,
    TimelineProps,
    FAQSectionProps,
    ContactPersonSectionProps {}

export const CompetitiveProgramming = (props: CompetitiveProgrammingProps) => {
  return (
    <RemainingTimeProvider>
      <div>
        <CompetitiveProgrammingHeader />
        <RegistrationCountdownSection />
        <PrizeSection prizeList={props.prizeList} />
        <TimelineSection timelineList={props.timelineList} />
        <FAQSection faqData={props.faqData} />
        <ContactPersonSection contactData={props.contactData} />
      </div>
    </RemainingTimeProvider>
  );
};
