import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const NavDropdown = () => {
  return (
    <>
      {/* Event Dropdown */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="text-lg font-bold text-blue-800 hover:underline flex items-center gap-2">
            Event
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 text-blue-800" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="bg-white rounded-lg shadow-md border border-gray-300 p-4 space-y-2">
          <Link
            href="/events/academya"
            className="block text-blue-800 hover:underline"
          >
            Arkavidia Academya
          </Link>
          <Link
            href="/events/indonesia"
            className="block text-blue-800 hover:underline"
          >
            Arkavidia For Indonesia
          </Link>
          <Link
            href="/events/school"
            className="block text-blue-800 hover:underline"
          >
            Arkavidia Goes To School
          </Link>
          <Link
            href="/events/talks"
            className="block text-blue-800 hover:underline"
          >
            Arkavidia Talks
          </Link>
          <Link
            href="/events/it-fest"
            className="block text-blue-800 hover:underline"
          >
            IT Fest
          </Link>
        </HoverCardContent>
      </HoverCard>

      {/* Competition Dropdown */}
      <HoverCard>
        <HoverCardTrigger asChild>
        <button className="text-lg font-bold text-blue-800 hover:underline flex items-center gap-2">
            Competition
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 text-blue-800" />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="bg-white rounded-lg shadow-md border border-gray-300 p-4 space-y-2">
          <Link
            href="/competition/hackathon"
            className="block text-blue-800 hover:underline"
          >
            Hackathon
          </Link>
          <Link
            href="/competition/coding"
            className="block text-blue-800 hover:underline"
          >
            Coding Contest
          </Link>
          <Link
            href="/competition/uiux"
            className="block text-blue-800 hover:underline"
          >
            UI/UX Design
          </Link>
          <Link
            href="/competition/ml"
            className="block text-blue-800 hover:underline"
          >
            Machine Learning Competition
          </Link>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
