import Image from "next/image";
import Whatsapp from "@images/whatsapp.svg";
import Line from "@images/line.svg";
import WebLogo from "@images/web-icon.svg";
export const ContactPersonSection = () => {
  return (
    <div>
      <h1>Contact Person</h1>
      <ul>
        <li>
          <Image alt="Whatsapp Logo" src={Whatsapp} />
          <span>089507646369</span>
          <span>Aira</span>
          <span>081283603881</span>
          <span>Ubai</span>
        </li>
        <li>
          <Image alt="Line Logo" src={Line} />
          <span>airathalca</span>
          <span>Aira</span>
          <span>ubaidillah_ariq</span>
          <span>Ubai</span>
        </li>
        <li>
          <Image alt="@ Logo" src={WebLogo} />
          <span>competition@arkavidia.id</span>
        </li>
      </ul>
    </div>
  );
};
