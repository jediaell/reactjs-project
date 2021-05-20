import styled from 'styled-components';
import { Button, Typography } from '~/components';
import { getTheme } from '~/utils';

const mediumSpacing = getTheme('mediumSpacing');
const smallSpacing = getTheme('smallSpacing');

export const BoxWrappers = styled.div`
  margin: ${smallSpacing} 0;
`;

export const Form = styled.form``;

export const SubmitButton = styled(Button)`
  margin: ${mediumSpacing} auto;
  align-self: center;
`;

export const Heading = styled(Typography).attrs({ variant: 'h4' })`
  font-weight: 700;
`;

export const Paragraph = styled(Typography)`
  margin-top: ${mediumSpacing};
  letter-spacing: 1px;
`;
