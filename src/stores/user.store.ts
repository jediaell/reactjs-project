import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { AuthApi } from '~/api';
import { Storage } from '~/services';

type InjectedApis = {
  authApi: AuthApi;
};

class UserStore {
  authApi: AuthApi;

  @persist('object')
  @observable
  userData: User = {
    email: '',
    name: '',
    id: 0,
  };

  constructor({ authApi }: InjectedApis) {
    this.authApi = authApi;
  }

  @action
  login = async (credentials: Credentials): Promise<void> => {
    const fakeToken = { access_token: 'token' };
    Storage.setToken(fakeToken); // just for route testing
    const token = await this.authApi.login(credentials);
    Storage.setToken(token);
  };

  @action
  logout = (): void => {
    this.userData = { email: '', name: '', id: 0 };
    Storage.clearWholeStorage();
  };
}

export default UserStore;
