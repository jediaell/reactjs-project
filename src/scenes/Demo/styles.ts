import styled from 'styled-components';
import { getTheme } from '~/utils';

const largeSpacing = getTheme('largeSpacing');

export const WrapperComponent = styled.div`
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

export const ComponentsGroup = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin: ${largeSpacing} 0;
`;
