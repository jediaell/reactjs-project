import { FormValidator, isValidCpf } from '~/utils';

const validateAlphanumeric = new RegExp('^[a-zA-Z0-9.]*$');

const validateComplexity = (value: string): boolean => {
  const regex = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;
  return regex.test(value);
};

const validateLength = (value: string): boolean =>
  value && value.length >= 6 ? true : false;

export default FormValidator.object().shape({
  cpf: FormValidator.string().test('cpf', 'CPF inválido', isValidCpf),
  email: FormValidator.string()
    .required('E-mail obrigatório')
    .email('E-mail inválido'),
  password: FormValidator.string()
    .matches(validateAlphanumeric, 'Senha não pode conter caracteres especiais')
    .required('Senha obrigatória')
    .test('length', 'Senha deve conter pelo menos 6 dígitos', validateLength)
    .test('length', 'Senha deve conter letras e números', validateComplexity),
  keepSession: FormValidator.boolean().oneOf([true], 'Aceite obrigatório'),
});
