import Image from "next/image";
import CPIcon from "/images/logocp.svg";
import Star from "/images/star.svg";
import GamePad from "/images/gamepad.svg";
import { Button } from "../ui/button";
export const CompetitiveProgrammingHeader = () => {
  return (
    <div className="bg-[linear-gradient(90deg,_rgb(11,10,10)_2%,_transparent_1%),_linear-gradient(rgb(11,10,10)_2%,_transparent_1%)] bg-[length:80px_80px] h-48 w-full relative">
      <Image
        src={Star}
        alt="Star Background"
        className="absolute top-4 left-4"
      />
      <Image
        src={GamePad}
        alt="Gamepad Background"
        className="absolute top-4 left-4"
      />
      <div className="flex flex-col gap-4">
        <Image src={CPIcon} alt="Cp Profile" className="mt-[-64px]" />
        <h1 className="font-bold text-2xl">Competitive Programming</h1>
        <p className="text-sm">
          Competitive Programming adalah kompetisi yang menguji kemampuan
          analisis para peserta dalam pemecahan masalah dan berpikir
          komputasional dengan menyelesaikan persoalan - persoalan yang
          diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak
          melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini
          ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia.
        </p>
        <div className="flex flex-row">
          <Button variant={"outline"}>Download Guidebook</Button>
          <Button>Register Now</Button>
        </div>
      </div>
    </div>
  );
};
