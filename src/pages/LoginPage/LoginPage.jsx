import { useMedia } from 'react-use';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { CustomizedLoginPage, Title } from 'components/LoginForm/Form.styled';

export const LoginPage = () => {
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <CustomizedLoginPage>
      {!isMobile && <Title>Finance App</Title>}
      <LoginForm />
    </CustomizedLoginPage>
  );
};
