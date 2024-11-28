"use client";

import Image from "next/image";
import ArkavLogo from "@images/logo-arkavidia.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { NavAccordion } from "../navigation/nav-accordion";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";

export const Navbar = () => {
  return (
    <nav className="w-full justify-center flex fixed top-10">
      <div className="flex flex-row w-4/5 px-14 border-black border-2 rounded-full py-4 justify-between">
        <Image
          width={50}
          height={50}
          src={ArkavLogo}
          alt={"Arkav Logo"}
        ></Image>

        <div className="lg:hidden flex justify-center items-center">
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="block h-1 w-6 bg-black rounded-lg"></span>
                <span className="block h-1 w-6 bg-black rounded-lg"></span>
                <span className="block h-1 w-6 bg-black rounded-lg"></span>
              </div>
            </SheetTrigger>
            
            <SheetContent
              side={"left"}
              className="min-w-full flex justify-center items-center text-blue-800 font-sans font-bold text-lg lg:hidden"
            >
              <SheetHeader>
                <DialogTitle></DialogTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-5">
                <li>
                  <Link href={"/home"}>Home</Link>
                </li>
                <NavAccordion />
                <li>
                  <Button
                    className="border-2 px-4 border-blue-900 rounded-xl py-2 inline-flex items-center text-lg font-bold"
                    variant={"outline"}
                  >
                    Sign in | Sign Up
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
