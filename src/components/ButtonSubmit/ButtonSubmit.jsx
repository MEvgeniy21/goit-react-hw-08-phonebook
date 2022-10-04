import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as SC from './ButtonSubmit.styled';

const ButtonSubmit = ({ children, validateForm, ...props }) => {
  const handleClick = evt => {
    validateForm().then(value => {
      const errors = Object.values(value);
      if (errors.length) {
        errors.map(error => toast.error(error));
      }
    });
  };
  return (
    <SC.Button {...props} type="submit" onClick={handleClick}>
      {children}
    </SC.Button>
  );
};

ButtonSubmit.propTypes = {
  children: PropTypes.any.isRequired,
  validateForm: PropTypes.func.isRequired,
};

export default ButtonSubmit;
