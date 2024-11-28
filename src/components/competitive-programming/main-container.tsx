import { CompetitiveProgrammingHeader } from "./competitive-header";
import { ContactPersonSection, ContactPersonSectionProps } from "./contact-person-section";
import { FAQSection, FAQSectionProps } from "./faq-section";
import { PrizeSection, PrizeSectionProps } from "./prize-section";
import {
  RegistrationCountdownProps,
  RegistrationCountdownSection,
} from "./registration-countdown-section";
import { TimelineProps, TimelineSection } from "./timeline-section";

export interface CompetitiveProgrammingProps
  extends RegistrationCountdownProps,
    PrizeSectionProps,
    TimelineProps,
    FAQSectionProps, ContactPersonSectionProps {}

export const CompetitiveProgramming = (props: CompetitiveProgrammingProps) => {
  return (
    <div>
      <CompetitiveProgrammingHeader />
      <RegistrationCountdownSection
        finalDate={props.finalDate}
        finalTime={props.finalTime}
      />
      <PrizeSection prizeList={props.prizeList} />
      <TimelineSection
        timelineList={props.timelineList}
        time={props.finalDate + props.finalTime}
      />
      <FAQSection faqData={props.faqData} />
      <ContactPersonSection contactData={props.contactData} />
    </div>
  );
};
