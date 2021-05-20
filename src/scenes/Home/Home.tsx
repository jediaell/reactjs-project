import React, { FC } from 'react';
import { SceneWrapper } from '~/components';
import { ActionButton, Heading, Paragraph } from '~/scenes/Home/styles';

type Props = {
  handleLogout(): void;
};

const Home: FC<Props> = ({ handleLogout }) => (
  <SceneWrapper>
    <Heading>Home</Heading>
    <Paragraph>Hello</Paragraph>
    <ActionButton secondary onPress={handleLogout}>
      Logout
    </ActionButton>
  </SceneWrapper>
);

export default Home;
