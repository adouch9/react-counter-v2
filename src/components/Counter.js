const Counter = ({counter, setCounter}) => {
    return(
        <div>
             <div className="buttons-container">
        <span
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </span>
        <button>{counter}</button>
        <span
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </span>
      </div>

      <button
        onClick={() => {
          setCounter(0);
        }}
        className="reset"
      >
        Reset
      </button>
        </div>
    )
}


export default Counter;