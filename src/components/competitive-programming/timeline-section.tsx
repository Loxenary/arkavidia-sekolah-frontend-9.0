import Image from "next/image";
import { TimeCountdown, TimeCountdownProps } from "./time-countdown";
import SingleDisk from "@images/single-disk.svg";

interface Timeline {
  title: string;
  date: string;
}

export interface TimelineProps extends TimeCountdownProps {
  timelineList: Timeline[];
}

export const TimelineSection = (props: TimelineProps) => {
  return (
    <section className="bg-yellow300 flex flex-col justify-center items-center py-20 gap-20">
      <h1 className="text-[3.5rem] font-black text-black ">Timeline</h1>
      <div className="flex flex-col gap-1 relative">
        <TimeCountdown time={props.time} />

        <ul className="flex w-[83vw] overflow-x-auto scrollbar scrollbar-thumb-white scrollbar-track-yellow200 pt-16 pb-20 bg-gradient-to-b from-[rgba(217,217,217,0)] to-[#FF634B] relative">
          {props.timelineList.map((item, index) => (
            <li
              className="text-white flex-col inline-flex justify-start items-center relative px-3.5"
              key={index}
            >
              <div className="w-full h-2 bg-white absolute top-8"></div>
              <Image
                src={SingleDisk}
                alt={"Single Disk"}
                className="z-10
                "
              />
              <h1 className="text-[1.25rem] font-black text-center w-max">
                {item.title}
              </h1>
              <h2 className="text-lg font-semibold text-center w-max">
                {item.date}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
