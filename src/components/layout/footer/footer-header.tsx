import Image from "next/image";
import Arkav from "@images/logo-arkavidia.png";
export const FooterHeader = () => {
  return (
    <div className="flex flex-row justify-center lg:h-fit h-full gap-2 w-full">
      <div className="bg-cream300 p-3 border-black border">
        <Image width={97} height={97} src={Arkav} alt={"Logo Arkav"} />
      </div>

      <div className="flex flex-col w-full text-white h-full">
        <h1 className="text-[1.5rem] px-12 text-center font-black py-3 h-full bg-black">
          Arkavidia 8.0
        </h1>
        <h2 className="text-[0.75rem] font-bold bg-green300 text-center h-full py-3 px-2 justify-center items-center flex">
          ADAPTIVE COLLABORATION TO ENCOUNTER DIGITAL DISRUPTION
        </h2>
      </div>
    </div>
  );
};
