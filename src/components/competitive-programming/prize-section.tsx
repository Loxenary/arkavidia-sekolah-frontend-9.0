import Image from "next/image";
import StarryStar from "/images/starry-star.svg";

interface PrizeItem {
  label: string;
  prize: string;
}

interface PrizeSectionProps {
  prizeList: PrizeItem[];
}

export const PrizeSection = ({ prizeList }: PrizeSectionProps) => {
  return (
    <div>
      <div>
        <h1 className="text-white font-bold text-4xl">Prize</h1>
        {/* <Image alt="Star backgorund" src={StarryStar} /> */}
      </div>
      <ul>
        {prizeList.map((item, index) => (
          <li key={index}>
            <h2>{item.label}</h2>
            <h3>{item.prize}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
