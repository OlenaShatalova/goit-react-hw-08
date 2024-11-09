import DocumentTitle from '../components/DocumentTitle';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Section from '../components/Section/Section';

const RegistrationPage = () => {
  return (
    <Section>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </Section>
  );
};

export default RegistrationPage;
