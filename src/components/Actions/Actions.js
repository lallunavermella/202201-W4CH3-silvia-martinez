import Display from "../Display/Display";
import Action from "../Action/Action";

const Actions = ({ numbers }) => {
  return (
    <>
      <div className="actions">
        <Display numbers={numbers} />
        <Action />
      </div>
    </>
  );
};

export default Actions;
