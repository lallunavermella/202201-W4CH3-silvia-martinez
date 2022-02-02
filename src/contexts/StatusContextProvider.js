import StatusContext from "./StatusContext";
import { useState } from "react";

const StatusContextProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);

  const clickNumber = (number) => {
    if (numbers.length === 9) {
      return;
    }
    setNumbers([...numbers, number]);
  };

  return (
    <StatusContext.Provider value={{ numbers, clickNumber }}>
      {children}
    </StatusContext.Provider>
  );
};
export default StatusContextProvider;
