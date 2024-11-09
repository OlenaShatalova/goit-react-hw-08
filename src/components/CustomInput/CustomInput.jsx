import { Field, ErrorMessage } from 'formik';
import css from './CustomInput.module.css';

const CustomInput = ({ type = 'text', name, label, placeholder }) => {
  return (
    <>
      <label className={css.label}>
        <span>{label}</span>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={css.input}
          // autoComplete={name}
        />
        <ErrorMessage name={name} component="span" className={css.error} />
      </label>
    </>
  );
};

export default CustomInput;
