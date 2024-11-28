import Link from "next/link";

interface EventItem {
  href: string;
  label: string;
}

interface EventListInterface {
  title: string;
  eventList: EventItem[];
}

const EventList = ({ title, eventList }: EventListInterface) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center bg-black p-1 font-semibold text-[0.9rem] text-white">
        {title}
      </h1>
      <ul>
        {eventList.map((event, index) => (
          <li key={index}>
            <Link className="text-sm font-bold text-blue300" href={event.href}>{event.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FooterEventList = ({
  competition,
  event,
}: {
  competition: EventListInterface;
  event: EventListInterface;
}) => {
  return (
    <div className="flex flex-row border border-black bg-white py-4 px-10 justify-around">
      <EventList title={"Competition"} eventList={competition.eventList} />
      <EventList title={"Events"} eventList={event.eventList} />
    </div>
  );
};
