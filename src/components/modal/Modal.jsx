import './common/copy-modal.css'
import PropTypes from "prop-types";
export default function Modal(props) {

  const {isDark , isShow , closeModal} = props;

  return (
    <div className={isShow ? 'modal-container show-modal' : 'modal-container'} >
       <div className={isDark ? 'modal-shadow white-shadow' : 'modal-shadow'}>
         <div className="modal-context">
         <i className="fa-solid fa-check-to-slot "></i>
          <h3>
            Na-Copy Na Beshie Wag Kana Malungkot
          </h3>
         </div>
         <div className="modal-button">
            <button onClick={closeModal}>
              Sigeh Beshie!
            </button>
         </div>
       </div>
    </div>
  )
}
Modal.propTypes = {
  isDark: PropTypes.bool.isRequired,
  isShow : PropTypes.bool.isRequired,
  closeModal : PropTypes.func
};
