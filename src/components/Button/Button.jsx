import PropTypes from 'prop-types';
import st from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={st.btnDiv}>
      <button className={st.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
