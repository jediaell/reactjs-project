import React, { FC } from 'react';
import { inject, observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import { Routes } from '~/routes';
import { UserStore } from '~/stores';
import Home from './Home';

type Props = {
  routing: RouterStore;
  user: UserStore;
};

const HomeContainer: FC<Props> = ({ user, routing }) => {
  const handleLogout = async (): Promise<void> => {
    user.logout();
    routing.push(Routes.LOGIN);
  };

  return <Home handleLogout={handleLogout} />;
};

export default inject('routing', 'user')(observer(HomeContainer));
