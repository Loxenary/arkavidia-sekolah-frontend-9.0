import Image from "next/image";
import { TimeCountdown, TimeCountdownProps } from "./time-countdown";
import SingleDisk from "/images/single-disk.svg";

interface Timeline {
  title: string;
  date: string;
}

interface TimelineProps extends TimeCountdownProps {
  timelineList: Timeline[];
}

export const TimelineSection = (props: TimelineProps) => {
  return (
    <div>
      <h1>Timeline</h1>
      <div>
        <TimeCountdown time={props.time} />
        <div>
          {/* Line */}
          <div></div>
          <ul>
            {props.timelineList.map((item, index) => (
              <li>
                <Image src={SingleDisk} alt={"Single Disk"} key={index} />
                <h1>{item.title}</h1>
                <h2>{item.date}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
