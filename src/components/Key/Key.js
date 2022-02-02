const Key = ({ number, action }) => {
  return (
    <>
      <li>
        <button className="key" onClick={() => action(number)}>
          {number}
        </button>
      </li>
    </>
  );
};

export default Key;
