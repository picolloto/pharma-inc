import { format, parseISO } from "date-fns";

export const formatDate = (date) => {
    return format(parseISO(date), "dd/MM/yyyy");
}
