import PropTypes from "prop-types";
import { useState } from "react";
export const CounterApp = ({ value, title }) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <h1>{title}</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}> +1</button>
      <button onClick={() => setCounter(counter - 1)}> -1</button>
      <button onClick={() => setCounter(value)}> reset</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string.isRequired
};
CounterApp.defaultProps = {
  title: "Title of Counter"
}
