const Key = ({ number, action }) => {
  return (
    <>
      <li>
        <button className="key" onClick={action}>
          {number}
        </button>
      </li>
    </>
  );
};

export default Key;
