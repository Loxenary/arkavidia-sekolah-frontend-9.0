import { FooterContact } from "./footer-contact";
import { FooterEventList } from "./footer-eventlist";
import { FooterHeader } from "./footer-header";

export const Footer = () => {
  return (
    <div>
      <FooterHeader />
      <FooterContact />
      <FooterEventList />
    </div>
  );
};
