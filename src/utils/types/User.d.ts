declare type User = {
  id: number;
  name: string;
  email: string;
};

declare type AuthUser = {
  cpf: string;
  email: string;
  password: string;
  keepSession: boolean;
};

declare type UserAction = {
  user: {
    login(parameter: Credentials): void;
    logout(): void;
  };
};
