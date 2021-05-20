import React, { FC } from 'react';
import { Formik } from 'formik';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import { Routes } from '~/routes';
import Login from '~/scenes/Login/Login';
import { UserStore } from '~/stores';
import { showAlert } from '~/utils';
import validationSchema from './validation';

const initialValues: AuthUser = {
  cpf: '',
  email: '',
  password: '',
  keepSession: true,
};

type Props = {
  routing: RouterStore;
  user: UserStore;
};

const LoginContainer: FC<Props> = ({ user, routing }) => {
  const handleFormSubmit = async (
    formValues: AuthUser,
    { setSubmitting }: { setSubmitting(value: boolean): void },
  ): Promise<void> => {
    setSubmitting(true);
    try {
      await user.login(formValues);
    } catch ({ message }) {
      showAlert({ message });
    } finally {
      routing.push(Routes.HOME);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
    >
      <Login />
    </Formik>
  );
};

export default inject('routing', 'user')(observer(LoginContainer));
