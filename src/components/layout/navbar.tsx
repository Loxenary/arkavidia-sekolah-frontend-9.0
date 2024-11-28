"use client";

import Image from "next/image";
import ArkavLogo from "/images/logo-arkavidia.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Close } from "@radix-ui/react-dialog";
import Link from "next/link";
import { NavAccordion } from "../navigation/nav-accordion";

export const Navbar = () => {
  return (
    <div className="w-full flex flex-row fixed justify-center">
      <Image src={ArkavLogo} alt={"Arkav Logo"}></Image>
      <div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <span className="h-1 w-6 bg-black rounded-lg transform transition duration-300 ease-in-out "></span>
              <span className="h-1 w-6 bg-black rounded-lg transform transition duration-300 ease-in-out "></span>
              <span className="h-1 w-6 bg-black rounded-lg transform transition duration-300 ease-in-out "></span>
            </SheetTrigger>
            <SheetContent>
              <ul>
                <li>
                  <Link href={"/home"}></Link>
                </li>
                <NavAccordion />
                <li>
                  <Button variant={"outline"}>Sign in | Sign Up</Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
