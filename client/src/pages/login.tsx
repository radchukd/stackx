import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useApolloClient, useLazyQuery } from '@apollo/react-hooks';
import { LOGIN } from '../graphql/queries';

const Login: FC<{}> = () => {
  const history = useHistory();
  const client = useApolloClient();
  const [loginQuery, { loading }] = useLazyQuery(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem('authToken', login);
      client.writeData({ data: { isLoggedIn: true } });
      history.push('/profile');
    },
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors: { email?: string; password?: string } = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;
        loginQuery({ variables: { input: { email, password } } });
        if (!loading) { setSubmitting(false); }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
