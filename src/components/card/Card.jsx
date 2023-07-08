import './common/card.css'

import PropTypes from "prop-types";

export default function Card(props) {

  const {isDark} = props;
  
  return (

    <div className={isDark ? 'card-container cont-dark' : 'card-container'}>
      <div className="card-title">
        <h2>Bakit Malungkot Beshie Ko</h2>
      </div>
         <div className="input-area">
         <textarea type="text" placeholder='🤸‍♂️ Type Muna Beshie' />
         </div>
       <div className="result-input">
       <p>
       BAKIT MALUNGKOT ANG BESHIE KO
       </p>
       </div>
      <div className="btn-cont">
      <button className={isDark ? 'btn-dark' : ''}>
      <i className="fa-regular fa-clipboard fa-lg"></i>
      </button>
      </div>
    </div>

  )
}
Card.propTypes = {
  isDark: PropTypes.bool.isRequired
};

