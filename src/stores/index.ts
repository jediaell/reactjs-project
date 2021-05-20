import { create } from 'mobx-persist';
import { AuthApi } from '~/api';
import UserStore from './user.store';

const authApi = new AuthApi();

class RootStore {
  user: UserStore;

  constructor() {
    this.user = new UserStore({ authApi });
  }
}

const store = new RootStore();
const hydrate = create({
  storage: localStorage,
});

hydrate('user', store.user);

export { UserStore };
export default store;
