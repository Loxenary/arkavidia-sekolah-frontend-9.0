
import MultiDisk from "@images/disk.svg";
import { TimeCountdown } from "./time-countdown";
import Image from "next/image";
import { useRemainingTime } from "@/app/context/remaining-time-context";

export const RegistrationCountdownSection = () => {
  const { fullDate } = useRemainingTime();

  return (
    <div className="flex flex-col relative">
      <div className="bg-white border-y-4 border-black font-black text-lg">
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div className="flex flex-col bg-brownblack w-full text-white pt-10 pb-10 items-center justify-center gap-6 overflow-visible">
        <Image
          src={MultiDisk}
          alt={"Double Disk"}
          className="absolute z-10 bottom-[-20%] max-lg:hidden"
        />
        <h1 className="max-lg:text-transparent text-white font-black text-[1.25rem]">
          {fullDate} WIB
        </h1>

        <div className="">
          <TimeCountdown />
        </div>
      </div>
    </div>
  );
};
