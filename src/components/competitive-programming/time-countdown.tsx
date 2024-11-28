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
    <li>
      <div>
        <span>{firstDigit}</span>
        <span>{secondDigit}</span>
      </div>
      <h3>{label}</h3>
    </li>
  );
};

export const TimeCountdown = (props: TimeCountdownProps) => {
  return (
    <ul>
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
