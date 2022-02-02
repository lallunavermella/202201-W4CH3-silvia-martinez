import { useContext } from "react";
import StatusContext from "../../contexts/StatusContext";

const Key = ({ number }) => {
  const { clickNumber } = useContext(StatusContext);
  return (
    <>
      <li>
        <button className="key" onClick={() => clickNumber(number)}>
          {number}
        </button>
      </li>
    </>
  );
};

export default Key;
