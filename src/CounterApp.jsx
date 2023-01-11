import PropTypes from "prop-types";
import { useState } from "react";
export const CounterApp = ({ value, title }) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <h1>{title}</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}> +1</button>
      <button onClick={() => setCounter(counter - 1)}> -1</button>
      <button onClick={() => setCounter(value)}> reset</button>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string
};
CounterApp.defaultProps = {
  title: "Title of Counter"
}
