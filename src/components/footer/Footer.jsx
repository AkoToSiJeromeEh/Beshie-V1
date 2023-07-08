import './common/footer.css'
import PropTypes from "prop-types";
export default function Footer(props) {

  const {isDark} = props
  return (

    <footer className={isDark ? 'add-dark' : ''}>
      <p>
      Created  by
       <a href="https://github.com/AkoToSiJeromeEh/Beshie-V1">  Jerome Pogi </a>
      </p>
    </footer>

  )
}
Footer.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

