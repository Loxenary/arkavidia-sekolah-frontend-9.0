import Link from "next/link";

export const FooterEventList = () => {
  return (
    <div>
      <div>
        <h1>Competition</h1>
        <ul>
          <li>
            <Link href={"cp"}>Compeitive Programming</Link>
          </li>
          <li>
            <Link href={"datavidia"}>Datavidia</Link>
          </li>
          <li>
            <Link href={"arkalogica"}>Arkalogica</Link>
          </li>
          <li>
            <Link href={"uxvidia"}>UXvidia</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Event</h1>
        <ul>
          <li>
            <Link href={"cp"}>Arkavidia Academya</Link>
          </li>
          <li>
            <Link href={"datavidia"}>Arkavidia For Indonesia</Link>
          </li>
          <li>
            <Link href={"arkalogica"}>Arkavidia Goes to School</Link>
          </li>
          <li>
            <Link href={"uxvidia"}>Arkavidia Talks</Link>
          </li>
          <li>
            <Link href={"uxvidia"}>IT Fest</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
