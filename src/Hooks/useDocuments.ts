import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import isUrl from "is-url";

export const useDocuments = (text?: string) => {
  const queryKey = ["documents", text];
  const queryFn = async () => Axios.get(`${text}`).then(({ data }) => data);
  const { data, ...rest } = useQuery({
    queryKey,
    queryFn,
    enabled: !!text && isUrl(text),
  });
  return { doc: isUrl(`${text}`) ? data : text, ...rest };
};
