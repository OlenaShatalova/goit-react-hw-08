import { Form, Formik } from 'formik';
import CustomInput from '../CustomInput/CustomInput';
import Button from '@mui/material/Button';
import css from './CustomForm.module.css';

const CustomForm = ({
  initialValues,
  onSubmit,
  validationShema,
  fields,
  btnName,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationShema}
      >
        <Form className={css.form}>
          {fields.map(field => (
            <CustomInput key={field.name} {...field} />
          ))}
          <Button type="submit" variant="outlined">
            {btnName}
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default CustomForm;
