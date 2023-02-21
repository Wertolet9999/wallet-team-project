import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from 'redux/auth/authOperations';
import Logo from 'components/Logo/Logo';
import { Container } from 'stylesheet/baseStyle';
import {
  Wrapper,
  HeaderLogo,
  Form,
  Label,
  Input,
  FormButton,
  FormLink,
} from './Form.styled';
import { IoMdMail } from 'react-icons/io';
import { MdLock } from 'react-icons/md';
import { routes } from 'service/routes';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string('Please, enter your e-mail')
      .email('Please, enter a valid e-mail')
      .required('E-mail is required'),
    password: yup
      .string('Please, enter your password')
      .min(6, 'Password must consist of at least 6 symbols')
      .max(12, 'Password must contain no more than 12 symbols')
      .required('Password is required'),
  });

  const { handleSubmit, values, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(login(values));
      resetForm();
    },
  });

  return (
    <Container>
      <Wrapper>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>

        <section>
          <Form onSubmit={handleSubmit}>
            <Label value={values.email} error={errors.email}>
              <IoMdMail />
              <Input
                type="text"
                name="email"
                value={values.email}
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
            </Label>

            <Label
              value={values.password}
              error={errors.password}
              length={values.password.length}
            >
              <MdLock />
              <Input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </Label>
            <FormButton type="submit">Log in</FormButton>
          </Form>

          <FormLink to={routes.REGISTER}>Register</FormLink>
        </section>
      </Wrapper>
    </Container>
  );
};
