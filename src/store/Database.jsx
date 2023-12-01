import { createContext } from "react";

export const Database = createContext({
  data: [],
  addData: () => {},
  deleteData: () => {},
});
