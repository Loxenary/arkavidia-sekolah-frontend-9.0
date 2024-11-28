import {
  handleDaysDigit,
  handleHoursDigit,
  handleMinutesDigit,
} from "@/app/utils/time-utils";

interface TimeCountdownItemProps {
  label: string;
  firstDigit: string;
  secondDigit: string;
}

export interface TimeCountdownProps {
  time: string;
}
const TimeCountdownItem = ({
  label,
  firstDigit,
  secondDigit,
}: TimeCountdownItemProps) => {
  return (
    <li className="flex flex-col gap-2 justify-center items-center">
      <div className=" text-black font-black flex flex-row gap-4 text-[2rem]">
        <span className="bg-white py-8 px-6 rounded-xl">{firstDigit}</span>
        <span className="bg-white py-8 px-6 rounded-xl">{secondDigit}</span>
      </div>
      <h3>{label}</h3>
    </li>
  );
};

export const TimeCountdown = (props: TimeCountdownProps) => {
  return (
    <ul className="w-full justify-center items-center flex gap-16">
      <TimeCountdownItem
        label={"Days"}
        firstDigit={handleDaysDigit(props.time)[0]}
        secondDigit={handleDaysDigit(props.time)[1]}
      />
      <TimeCountdownItem
        label={"Hours"}
        firstDigit={handleHoursDigit(props.time)[0]}
        secondDigit={handleHoursDigit(props.time)[1]}
      />
      <TimeCountdownItem
        label={"Minutes"}
        firstDigit={handleMinutesDigit(props.time)[0]}
        secondDigit={handleMinutesDigit(props.time)[1]}
      />
    </ul>
  );
};
