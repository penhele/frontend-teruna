import { cn } from "cn";
import { Badge } from "../ui/badge";

interface Props {
  sektor: string;
}

export default function SektorBadge({ sektor }: Props) {
  return (
    <Badge
      className={cn(
        sektor === "1" &&
          "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
        sektor === "2" &&
          "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
        sektor === "3" &&
          "bg-blue-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
        sektor === "4" &&
          "bg-blue-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
        sektor === "5" &&
          "bg-blue-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
        sektor === "6" &&
          "bg-blue-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
      )}
    >
      Sektor {sektor}
    </Badge>
  );
}
