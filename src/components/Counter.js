const Counter = ({ tab, setTab }) => {
  return (
    <div>
      <div className="buttons-container">
        <span
          onClick={() => {
            setTab(tab - 1);
          }}
        >
          -
        </span>
        <button>{tab}</button>
        <span
          onClick={() => {
            setTab(tab + 1);
          }}
        >
          +
        </span>
      </div>

      <button
        onClick={() => {
          setTab(0);
        }}
        className="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
