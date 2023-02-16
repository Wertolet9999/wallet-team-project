import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string('Please, enter your e-mail')
      .email('Please, enter a valid e-mail')
      .required('Email is required'),
    password: Yup.string('Please, enter your password')
      .min(6, 'Password must consist of at least 6 symbols')
      .max(12, 'Password must contain no more than 12 symbols')
      .required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(signIn(values.email, values.password))
      .then(() => {
        // handle successful sign-in
      })
      .catch(() => {
        // handle sign-in error
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">email</label>
            <Field type="text" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          {error && <div>{error}</div>}
          <button type="submit" disabled={isSubmitting}>
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};
