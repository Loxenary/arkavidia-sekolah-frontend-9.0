import Image from "next/image";
import Insta from "@images/insta.svg";
import Linkedin from "@images/linkedin.svg";
import CP from "@images/contacticon.svg";
import Tiktok from "@images/tiktok.svg";
import Youtube from "@images/youtube.svg";
export const FooterContact = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-4 bg-white border-black shadow-[4.47px_4.90px_0] shadow-blue300 border h-fit flex-row flex gap-4">
        <Image width={24} src={CP} alt={"Contact Person"} />
        <span>CP: {"Nelsen (0821-1274-9139)"}</span>
      </div>
      <ul className="justify-evenly flex flex-row w-fit gap-4">
        <li className="p-2 bg-white shadow-[4.47px_4.90px_0] shadow-blue300 border border-black items-center flex">
          <a href="https://www.instagram.com/arkavidia/">
            <Image width={24} height={24} src={Insta} alt={"Instagram Logo"} />
          </a>
        </li>
        <li className="p-2 bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center">
          <a href="https://www.tiktok.com/@arkavidia/">
            <Image width={24} height={24} src={Tiktok} alt={"Tiktok Logo"} />
          </a>
        </li>
        <li className="p-2 bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center">
          <a href="https://www.youtube.com/channel/UC7QQH48TgjZKAIJeZNRrKyw">
            <Image width={24} height={24} src={Youtube} alt={"Youtube Logo"} />
          </a>
        </li>
        <li className="p-2 bg-white shadow-[4.47px_4.82px_0] shadow-blue300 border border-black items-center">
          <a href="https://www.linkedin.com/company/arkavidia">
            <Image
              width={24}
              height={24}
              src={Linkedin}
              alt={"Linkedin Logo"}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
