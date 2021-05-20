import React from 'react';
import { inject, observer } from 'mobx-react';
import { Switch } from 'react-router-dom';
import { Demo, Home, Login } from '~/scenes';
import Private from './private';
import Public from './public';
import { Routes } from './routing';

const RoutesContainer: React.FC = () => {
  return (
    <Switch>
      <Public path={Routes.LOGIN} component={Login} />
      <Private exact path={Routes.HOME} component={Home} />
      <Private path={Routes.DEMO} component={Demo} />
    </Switch>
  );
};

export { Routes };
export default inject('routing')(observer(RoutesContainer));
