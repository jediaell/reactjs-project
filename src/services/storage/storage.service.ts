import Keys from './keys';

const Storage = window.localStorage;

export default class StorageService {
  static clearWholeStorage(): void {
    Storage.clear();
  }

  static getToken(): Token {
    const value = Storage.getItem(Keys.TOKEN);
    return value ? JSON.parse(value) : '';
  }

  static setToken(token: Token): void {
    const item = JSON.stringify(token);
    Storage.setItem(Keys.TOKEN, item);
  }
}
