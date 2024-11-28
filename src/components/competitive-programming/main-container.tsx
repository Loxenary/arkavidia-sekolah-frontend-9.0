import { CompetitiveProgrammingHeader } from "./competitive-header";
import { PrizeSection } from "./prize-section";
import { RegistrationCountdownSection } from "./registration-countdown-section";

export const CompetitiveProgramming = () => {
  return (
    <div>
      <CompetitiveProgrammingHeader />
      <RegistrationCountdownSection
        finalDate={"31 December 2022"}
        finalTime={"23:59"}
      />
      <PrizeSection
        prizeList={[
          {
            prize: "Rp 7.000.000,-",
            label: "Juara 1",
          },
          {
            prize: "Rp 5.000.000,-",
            label: "Juara 2",
          },
          {
            prize: "Rp 3.000.000,-",
            label: "Juara 3",
          },
          {
            prize: "Rp 100.000,-/soal",
            label: "First Solver on Final",
          },
        ]}
      />
    </div>
  );
};
