import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import CustomForm from '../CustomForm/CustomForm';
import { loginSchema, loginFields } from '../../util/formHelper';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formValue, formAction) => {
    dispatch(login(formValue))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    formAction.resetForm();
  };

  return (
    <>
      <CustomForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationShema={loginSchema}
        fields={loginFields}
        btnName={'Log In'}
      />
    </>
  );
};

export default LoginForm;
