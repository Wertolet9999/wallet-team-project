import { useMedia } from 'react-use';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import {
  CustomizedRegisterPage,
  Title,
} from 'components/LoginForm/Form.styled';

export const RegisterPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <CustomizedRegisterPage>
      {!isMobile && <Title>Finance App</Title>}
      <RegistrationForm />
    </CustomizedRegisterPage>
  );
};
