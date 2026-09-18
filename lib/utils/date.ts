import { format } from "date-fns";
import { id } from "date-fns/locale";

export const formatDate = (date: string | Date) => {
  return format(new Date(date), "dd MMMM yyyy", {
    locale: id,
  });
};
