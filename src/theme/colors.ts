import { darken, lighten } from 'polished';
import { Colors } from '@platformbuilders/react-elements';

const primary = '#121C2B';
const secondary = '#143847';
const tertiary = '#616161';
const accent = '#FFF8E6';
const disabled = '#eeeeee';

const colors: Colors = {
  text: '#212121',
  info: '#4096D1',
  success: '#357a38',
  warning: '#F5B800',
  failure: '#cc0000',
  disabled: {
    light: lighten(0.05, disabled),
    main: disabled,
    dark: darken(0.3, disabled),
    contrast: '#cccccc',
  },
  primary: {
    light: lighten(0.05, primary),
    main: primary,
    dark: darken(0.12, primary),
    contrast: '#ffffff',
  },
  secondary: {
    light: lighten(0.05, secondary),
    main: secondary,
    dark: darken(0.1, secondary),
    contrast: '#ffffff',
  },
  tertiary: {
    light: lighten(0.15, tertiary),
    main: tertiary,
    dark: darken(0.1, tertiary),
    contrast: '#ffffff',
  },
  accent: {
    light: lighten(0.05, accent),
    main: accent,
    dark: darken(0.05, accent),
    contrast: '#ffffff',
  },
};

export default colors;
