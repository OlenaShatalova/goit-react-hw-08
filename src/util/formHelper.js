import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .min(5, 'Too short!')
    .max(25, 'Too long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must not exceed 20 characters')
    .required('Required'),
});
export const registerFields = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    autoFocus: 'autoFocus',
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'xxxxxxxx',
  },
];

export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});
export const loginFields = [
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    placeholder: 'xxx@mail.com',
    autoFocus: 'autoFocus',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'xxxxxxxx',
  },
];

export const phoneNumbRegret =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
export const contactsSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .required('Required')
    .matches(
      phoneNumbRegret,
      'Invalid phone number. Phone must be +380XXXXXXXXX'
    ),
});
