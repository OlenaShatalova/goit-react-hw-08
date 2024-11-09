import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { registerFields, registerSchema } from '../../util/formHelper';
import CustomForm from '../CustomForm/CustomForm';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValue, formActions) => {
    dispatch(register(formValue));
    formActions.resetForm();
  };

  return (
    <CustomForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationShema={registerSchema}
      fields={registerFields}
      btnName={'Submit'}
    />
  );
};

export default RegistrationForm;
