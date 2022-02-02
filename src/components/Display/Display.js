import { useContext } from "react";
import StatusContext from "../../contexts/StatusContext";

const Display = () => {
  const { numbers } = useContext(StatusContext);

  return (
    <>
      <span className="number">{numbers}</span>
    </>
  );
};

export default Display;
