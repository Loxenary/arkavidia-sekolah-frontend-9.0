import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  
  handleFullDate,
  
  handleRemainingTime,
} from "../utils/time-utils";

interface RemainingTimeContextType {
  fullDate: string;
  remainingTime: string;
  targetDate: string;
  setTargetDate: (date: string) => void;
}

const RemainingTimeContext = createContext<
  RemainingTimeContextType | undefined
>(undefined);

interface RemainingTimeProviderProps {
  children: ReactNode;
}
export const RemainingTimeProvider = ({
  children,
}: RemainingTimeProviderProps) => {
  const [targetDate, setTargetDate] = useState<string>("");
  const [fullDate, setFullDate] = useState<string>("Minggu");
  const [remainingTime, setRemainingTime] = useState<string>("00:00:00:00");


  useEffect(() => {
    const fetchTargetDate = async () => {
      try {
        const response = await fetch("/data/targetDate.json");
        const data = await response.json();
        setTargetDate(data.targetDate);
      } catch (error) {
        console.warn("Failwed to fetch target Date: ", error);
      }
    };
    fetchTargetDate();
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      setFullDate(handleFullDate(targetDate));
      setRemainingTime(handleRemainingTime(targetDate));
      
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetDate]);

  return (
    <RemainingTimeContext.Provider
      value={{
        fullDate,
        remainingTime,
        
        targetDate,
        setTargetDate,
      }}
    >
      {children}
    </RemainingTimeContext.Provider>
  );
};

export const useRemainingTime = (): RemainingTimeContextType => {
  const context = useContext(RemainingTimeContext);
  if (!context) {
    throw new Error(
      "useRemainingTime must be used within a RemainingTimeProvider"
    );
  }
  return context;
};
