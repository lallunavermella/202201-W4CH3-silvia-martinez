import StatusContext from "./StatusContext";

const StatusContextProvider = ({ children }) => {
  return <StatusContext.Provider value={""}>{children}</StatusContext.Provider>;
};
export default StatusContextProvider;
