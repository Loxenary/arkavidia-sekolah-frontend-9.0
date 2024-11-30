// Hande the day
export function handleDay(time: string) {
  const targetDate = new Date(time);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[targetDate.getDay()];
}

export function extractDateAndTime(isoString: string): {
  date: string;
  time: string;
} {
  // Parse the ISO string into a Date object
  const dateObj = new Date(isoString);

  // Check for invalid date
  if (isNaN(dateObj.getTime())) {
    console.warn("Bad Object :", isoString);
    throw new Error("Invalid ISO string");
  }

  // Extract the components for the date
  const day = dateObj.getDate(); // Day of the month
  const month = dateObj.toLocaleString("en-US", { month: "long" }); // Full month name
  const year = dateObj.getFullYear(); // Year

  // Format the date as "26 December 2024"
  const date = `${day} ${month} ${year}`;

  // Extract time in "HH:mm:ss" format
  const time = isoString.split("T")[1].split("Z")[0]; // "23:59:00"

  return { date, time };
}

export function handleFullDate(isoString: string) {
  const day = handleDay(isoString);
  const { date, time } = extractDateAndTime(isoString);
  return `${day},${date}-${time}`;
}

// Handle the Remaining Time
// dateString should be "29 November 2025 23:59" for example
// This returning 22:30:00 as if 22 days, 30 hours, and 0 minutes again
export function handleRemainingTime(dateString: string) {
  const targetDate = new Date(dateString);

  const currentDate = new Date();

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  if (timeDifference <= 0) {
    return "00:00:00";
  }
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${days < 10 ? "0" + days : days}:${
    hours < 10 ? "0" + hours : hours
  }:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Handle the Digit of Days
export function handleDaysDigit(RemainingTime: string) {
  return RemainingTime.substring(0, 2);
}

// Handle the Digit of Hours
export function handleHoursDigit(RemainingTime: string) {
  return RemainingTime.substring(3, 5);
}

// Handle the digit of Minutes
export function handleMinutesDigit(RemainingTime: string) {
  return RemainingTime.substring(6, 8);
}

// Handle the digit of Seconds
export function handleSecondsDigit(RemainingTime: string) {
  return RemainingTime.substring(9, 11);
}
