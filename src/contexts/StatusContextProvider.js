import StatusContext from "./StatusContext";
import { useState } from "react";

const StatusContextProvider = ({ children }) => {
  return <StatusContext.Provider value={""}>{children}</StatusContext.Provider>;
};
export default StatusContextProvider;
