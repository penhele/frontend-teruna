import { cn } from "cn";
import { Badge } from "../ui/badge";

interface Props {
  isActive: boolean;
}

export default function ActiveBadge({ isActive }: Props) {
  return (
    <Badge
      className={cn(
        isActive
          ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
          : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
      )}
    >
      {isActive ? "Aktif" : "Tidak Aktif"}
    </Badge>
  );
}
