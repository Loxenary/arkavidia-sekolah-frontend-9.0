import Image from "next/image";
import Insta from "@images/insta.svg";
import Linkedin from "@images/linkedin.svg";
import CP from "@images/contacticon.svg";
import Tiktok from "@images/tiktok.svg";
import Youtube from "@images/youtube.svg";
export const FooterContact = () => {
  return (
    <ul>
      <li>
        <div>
          <Image src={CP} alt={"Contact Person"} />
          <span>CP: {"Nelsen (0821-1274-9139)"}</span>
        </div>
      </li>
      <li>
        <a href="https://www.instagram.com/arkavidia/">
          <Image src={Insta} alt={"Instagram Logo"} />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@arkavidia/">
          <Image src={Tiktok} alt={"Tiktok Logo"} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC7QQH48TgjZKAIJeZNRrKyw">
          <Image src={Youtube} alt={"Youtube Logo"} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/arkavidia">
          <Image src={Linkedin} alt={"Linkedin Logo"} />
        </a>
      </li>
    </ul>
  );
};
