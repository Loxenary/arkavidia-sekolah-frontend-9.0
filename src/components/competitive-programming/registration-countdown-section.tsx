import { handleDay } from "@/app/utils/time-utils";
import Disk from "/images/disk.svg";
import { TimeCountdown } from "./time-countdown";

interface RegistrationCountdownProps {
  finalDate: string;
  finalTime: string;
}

export const RegistrationCountdownSection = ({
  finalDate,
  finalTime,
}: RegistrationCountdownProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white border-y-2 border-black font-bold text-lg">
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div className="flex flex-col">
        <h1>
          {handleDay(finalDate)} , {finalDate} - {finalTime} WIB
        </h1>
        <div>
          <TimeCountdown time={finalDate + finalTime} />
        </div>
      </div>
    </div>
  );
};
