declare interface ButtonType {
  onPress(): void;
  type?: string;
  secondary?: boolean;
  transparent?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: JSX.Element | string;
}
