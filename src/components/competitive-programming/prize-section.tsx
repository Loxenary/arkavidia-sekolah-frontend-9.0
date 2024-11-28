import Image from "next/image";
import StarryStar from "@images/starry-star.svg";

interface PrizeItem {
  label: string;
  prize: string;
}

export interface PrizeSectionProps {
  prizeList: PrizeItem[];
}

export const PrizeSection = ({ prizeList }: PrizeSectionProps) => {
  return (
    <section className="bg-blue300 items-center flex justify-center w-full max-lg:flex-col py-20 gap-10">
      <div>
        <h1 className="text-white font-black text-[3.5rem]">Prize</h1>
        {/* <Image alt="Star backgorund" src={StarryStar} /> */}
      </div>
      <ul className="flex flex-col gap-4 w-full px-16">
        {prizeList.map((item, index) => (
          <li
            className="text-white bg-red300 font-black text-2xl flex items-center justify-center border-8 p-2 border-black w-full flex-col"
            key={index}
          >
            <h2>{item.label}</h2>
            <h3>{item.prize}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
