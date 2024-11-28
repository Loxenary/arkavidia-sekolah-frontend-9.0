import Image, { StaticImageData } from "next/image";
interface Contact {
  contact: string;
  person?: string;
}

interface ContactPersonItemProps {
  src: StaticImageData;
  alt: string;
  contacts: Contact[];
}

export interface ContactPersonSectionProps {
  contactData: ContactPersonItemProps[];
}

const ContactPersonItem = ({ src, alt, contacts }: ContactPersonItemProps) => {
  return (
    <li className="flex flex-col items-center justify-center gap-2 bg-blue400 px-16 py-7 rounded-2xl w-[250px] h-[250px]">
      <Image alt={alt} src={src} width={85} />
      {contacts.map((item, index) => (
        <div key={index} className="text-sm text-center gap-1 flex-col flex" >
          <span className="text-white font-light">{item.contact}</span>
          <span className="text-white font-bold">{item.person}</span>
        </div>
      ))}
    </li>
  );
};

export const ContactPersonSection = ({
  contactData,
}: ContactPersonSectionProps) => {
  return (
    <section className="px-12 py-20 flex flex-col gap-10">
      <h1 className="text-[3.5rem] font-black">Contact Person</h1>
      <ul className="flex md:flex-row max-md:flex-col gap-5 items-center">
        {contactData.map((item, index) => (
          <ContactPersonItem
            key={index}
            src={item.src}
            alt={item.alt}
            contacts={item.contacts}
          />
        ))}
      </ul>
    </section>
  );
};
