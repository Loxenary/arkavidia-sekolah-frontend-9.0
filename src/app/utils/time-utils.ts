// Hande the day
export function handleDay(time: string) {
  return "Sabtu";
}


// Handle the Remaining Time
// Time will looks like 11/29/2024 23:59:59
export function handleRemainingTime(time: string) {
  return "04:24:33";
}


// Handle the Digit of Days
export function handleDaysDigit(time : string){
  return handleRemainingTime(time).substring(0,1);
}

// Handle the Digit of Hours
export function handleHoursDigit(time : string){
  return handleRemainingTime(time).substring(3,4);
}

// Handle the digit of Minutes
export function handleMinutesDigit(time : string){
  return handleRemainingTime(time).substring(6,7);
}
