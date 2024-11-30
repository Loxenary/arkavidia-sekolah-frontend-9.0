import { FooterContact } from "./footer-contact";
import { FooterEventList } from "./footer-eventlist";
import { FooterHeader } from "./footer-header";

export const Footer = () => {
  return (
    <>
      <div
        className="bg-orange300 w-full h-full z-20 p-5 border-t-black border-t-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, black 5%, transparent 5%), linear-gradient(black 5%, transparent 5%)",
          backgroundSize: "60px 60px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto] gap-4">
          <div className="row-start-1 col-start-1 gap-4 flex-col flex">
            <FooterHeader />
            <div className="max-md:hidden">
              <FooterContact />
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-1">
            <FooterEventList
              competition={{
                title: "Competition",
                eventList: [
                  { href: "CP", label: "Competitive Programming" },
                  { href: "Datavidia", label: "Datavidia" },
                  { href: "CP", label: "Arkalogica" },
                  { href: "UX", label: "UXvidia" },
                ],
              }}
              event={{
                title: "Event",
                eventList: [
                  { href: "CP", label: "Arkavidia Academy" },
                  { href: "Datavidia", label: "Arkavidia For Indonesia" },
                  { href: "CP", label: "Arkavidia Goes To School" },
                  { href: "UX", label: "Arkavidia Talks" },
                  { href: "UX", label: "IT Fest" },
                ],
              }}
            />
          </div>
          <div className="md:hidden md:colf-start-1 md:row-start-2">
            <FooterContact />
          </div>
        </div>
      </div>
      <div className="bg-cream300 w-full border-t border-t-black flex  pl-5 items-center text-left">
        © 2022 ARKAVIDIA. All rights reserved
      </div>
    </>
  );
};
