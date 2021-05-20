import styled from 'styled-components';
import { Button, Typography } from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');
const sectionSpacing = getTheme('sectionSpacing');

export const Heading = styled(Typography).attrs({
  variant: 'h4',
})`
  font-weight: 700;
`;

export const Paragraph = styled(Typography)`
  margin-top: ${mediumSpacing};
  margin-bottom: ${sectionSpacing};
  font-weight: 400;
  letter-spacing: 1px;
`;

export const ActionButton = styled(Button)`
  width: 100%;
`;
