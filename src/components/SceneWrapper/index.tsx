import React, { FC } from 'react';
import { ChildrenWrapper, Constrain } from './styles';

const ScheneWrapper: FC = ({ children, ...rest }): JSX.Element => (
  <ChildrenWrapper {...rest}>
    <Constrain>{children}</Constrain>
  </ChildrenWrapper>
);

export default ScheneWrapper;
