import styled from 'styled-components';
import { getTheme, pxToRem } from '~/utils';

const primaryContrast = getTheme('primary.contrast');
const sceneSpacing = getTheme('sceneSpacing');

export const ChildrenWrapper = styled.div`
  background-color: ${primaryContrast};
  padding: ${sceneSpacing};
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Constrain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: ${pxToRem(650)};
`;
