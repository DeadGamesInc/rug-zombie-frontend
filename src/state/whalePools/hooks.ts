import { useSelector } from "react-redux";
import { State } from "../types";

export const useGetWhalePool = () => {
  return useSelector((state: State) => state.whalePool)
}