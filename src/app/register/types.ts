export interface IRegisterInputs {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type ILoginInputs = Omit<IRegisterInputs, "login, confirmPassword">;
