import PropTypes from 'prop-types';
import { useField } from 'formik';
import * as SC from './InputField.styled';
import { toast } from 'react-toastify';

const InputField = ({ name, onBlur, ...props }) => {
  const [field, meta] = useField(name);

  const handleBlur = evt => {
    onBlur(evt);
    if (meta.error) {
      toast.error(meta.error);
    }
  };

  return (
    <>
      <SC.Input
        {...field}
        {...props}
        onBlur={handleBlur}
        isError={meta.touched && meta.error}
      />
      {/* {meta.touched && meta.error && <div>{meta.error}</div>} */}
    </>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default InputField;
