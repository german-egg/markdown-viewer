import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useDocuments = (url?: string) => {
  const queryKey = ["documents", url];
  const queryFn = async () => Axios.get(`${url}`).then(({ data }) => data);
  const { data: doc, ...rest } = useQuery({
    queryKey,
    queryFn,
    enabled: !!url,
  });
  return { doc, ...rest };
};
