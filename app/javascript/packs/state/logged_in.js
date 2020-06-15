import {atom} from 'recoil'

export const loggedInState = atom({key: 'loggedIn', default: false})
export const getToken = () =>
    document.querySelector('meta[name="csrf-token"]').getAttribute('content');
export const setToken = (token) => {
  document.querySelector('meta[name="csrf-token"]')
      .setAttribute('content', token)
};
export const tokenState = atom({key: 'token', default: getToken()});