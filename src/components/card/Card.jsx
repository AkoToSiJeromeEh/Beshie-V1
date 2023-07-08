
import PropTypes from "prop-types";
import './common/card.css'
export default function Card(props) {

  const {isDark , inputChange , userInput , handleCopy } = props;
  
  return (

    <div className={isDark ? 'card-container cont-dark' : 'card-container'}>
      <div className="card-title">
        <h2>Bakit Malungkot Beshie Ko</h2>
      </div>
         <div className="input-area">
         <textarea 
         onChange={inputChange}
         value={userInput}
         type="text" 
         placeholder='🤸‍♂️ Type Muna Beshie' 
         />
         </div>
       <div className="result-input">
       <p>
        {userInput}
       </p>
       </div>
      <div className="btn-cont">
      <button onClick={handleCopy} className={isDark ? 'btn-dark' : ''}>
        <i className="fa-regular fa-clipboard fa-lg"></i> 
      </button>
      </div>
    </div>

  )
}
Card.propTypes = {
  isDark: PropTypes.bool.isRequired,
  inputChange : PropTypes.func ,
  userInput : PropTypes.string.isRequired,
  handleCopy : PropTypes.func ,
  copyText : PropTypes.string.isRequired
};

