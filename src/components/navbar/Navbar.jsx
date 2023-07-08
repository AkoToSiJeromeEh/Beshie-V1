import "./common/navbar.css";
import PropTypes from "prop-types";
export default function Navbar(props) {
  const { ToggleDark, isDark } = props;
  return (
    <nav className={isDark ? 'nav-container nav-dark' : 'nav-container'}>
      <div className="nav-title">
        <h1>
          <span>🤸‍♂️</span> Beshie Ko
        </h1>
      </div>
      <div className="nav-darkmode">
        <div
          className={isDark ? "toggler-container dark " : "toggler-container"}
          onClick={ToggleDark}
        >
          <button
            className={isDark ? "btn-circle align-end" : "btn-circle"}
            onClick={ToggleDark}
          ></button>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  ToggleDark: PropTypes.func,
  isDark: PropTypes.bool.isRequired,
};
