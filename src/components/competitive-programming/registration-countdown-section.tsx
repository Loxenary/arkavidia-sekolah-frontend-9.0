import { handleDay } from "@/app/utils/time-utils";
import Disk from "@images/disk.svg";
import { TimeCountdown } from "./time-countdown";

export interface RegistrationCountdownProps {
  finalDate: string;
  finalTime: string;
}

export const RegistrationCountdownSection = ({
  finalDate,
  finalTime,
}: RegistrationCountdownProps) => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white border-y-4 border-black font-black text-lg">
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div className="flex flex-col bg-brownblack w-full text-white pt-10 pb-10 items-center jsutify-center gap-6">
        <h1 className="max-lg:text-transparent text-white font-black text-[1.25rem]">
          {handleDay(finalDate)} , {finalDate} - {finalTime} WIB
        </h1>

        <TimeCountdown time={finalDate + finalTime} />
      </div>
    </div>
  );
};
