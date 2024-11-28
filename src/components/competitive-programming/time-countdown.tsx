import { useRemainingTime } from "@/app/context/remaining-time-context";
import {
  handleDaysDigit,
  handleHoursDigit,
  handleMinutesDigit,
  handleSecondsDigit,
} from "@/app/utils/time-utils";

interface TimeCountdownItemProps {
  label: string;
  firstDigit: string;
  secondDigit: string;
}

const TimeCountdownItem = ({
  label,
  firstDigit,
  secondDigit,
}: TimeCountdownItemProps) => {
  return (
    <li className="flex flex-col gap-2 justify-center items-center">
      <div className=" text-black font-black flex flex-row gap-4 text-[1.5rem]">
        <span className="bg-white py-6 px-4 rounded-xl border-2 border-black">
          {firstDigit}
        </span>
        <span className="bg-white py-6 px-4 rounded-xl border-2 border-black">
          {secondDigit}
        </span>
      </div>
      <h3 className="font-black text-white">{label}</h3>
    </li>
  );
};

export const TimeCountdown = () => {
  const { remainingTime } = useRemainingTime();
  console.log("eXXE: ", remainingTime);
  return (
    <ul className="w-full justify-center items-center flex gap-4 relative">
      <TimeCountdownItem
        label={"Days"}
        firstDigit={handleDaysDigit(remainingTime)[0]}
        secondDigit={handleDaysDigit(remainingTime)[1]}
      />
      <span className="text-black font-black text-4xl">:</span>
      <TimeCountdownItem
        label={"Hours"}
        firstDigit={handleHoursDigit(remainingTime)[0]}
        secondDigit={handleHoursDigit(remainingTime)[1]}
      />
      <span>:</span>
      <TimeCountdownItem
        label={"Minutes"}
        firstDigit={handleMinutesDigit(remainingTime)[0]}
        secondDigit={handleMinutesDigit(remainingTime)[1]}
      />
      <span>:</span>
      <TimeCountdownItem
        label={"Seconds"}
        firstDigit={handleSecondsDigit(remainingTime)[0]}
        secondDigit={handleSecondsDigit(remainingTime)[1]}
      />
    </ul>
  );
};
