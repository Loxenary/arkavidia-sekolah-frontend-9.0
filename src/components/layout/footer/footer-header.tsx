import Image from "next/image";
import Arkav from "@images/logo-arkavidia.png";export const FooterHeader = () => {
  return (
    <div>
      <div>
        <Image src={Arkav} alt={"Logo Arkav"} />
      </div>
      <div>
        <h1>Arkavidia 8.0</h1>
        <h2>ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL DISRUPTION</h2>
      </div>
    </div>
  );
};
