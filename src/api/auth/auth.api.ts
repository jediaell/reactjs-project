import { ResponseError } from '~/utils';
import request from '../request';

export default class AuthApi {
  login = async ({ email, password }: Credentials): Promise<Token> => {
    try {
      const { data } = await request.post('/login', {
        username: email,
        password,
      });
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };

  fetchUser = async (): Promise<User> => {
    try {
      const { data } = await request.get('/profile');
      return data;
    } catch (error) {
      throw new ResponseError(error);
    }
  };
}
