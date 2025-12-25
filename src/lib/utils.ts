import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatDateShort(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "short" });

  // Add ordinal suffix (st, nd, rd, th)
  let suffix = "th";
  if (day % 10 === 1 && day !== 11) suffix = "st";
  else if (day % 10 === 2 && day !== 12) suffix = "nd";
  else if (day % 10 === 3 && day !== 13) suffix = "rd";

  return `${day}${suffix} ${month}`;
}
