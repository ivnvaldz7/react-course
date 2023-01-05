import PropTypes from "prop-types";

export const App = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h4>{`Con ${name}`}</h4>
    </>
  );
};
App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  name: PropTypes.string.isRequired,
};
App.defaultProps = {
  subtitle: "No existe texto",
  name: "No existe texto",
};
