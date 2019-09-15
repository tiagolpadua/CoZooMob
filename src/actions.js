import {carregarAnimaisAPI, loginAPI} from './api';
import {
  LOGIN,
  CARREGAR_ANIMAIS,
  DESFAVORITAR,
  FAVORITAR,
  SET_LOADING,
} from './constants';

export function login(usuario, senha) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      data: true,
    });
    return loginAPI(usuario, senha)
      .then(res => {
        dispatch({
          type: LOGIN,
          data: {usuarioLogado: usuario, token: res.data.token},
        });
      })
      .finally(() => {
        dispatch({
          type: SET_LOADING,
          data: false,
        });
      });
  };
}

export function carregarAnimais() {
  return dispatch => {
    carregarAnimaisAPI()
      .then(res => {
        dispatch({
          type: CARREGAR_ANIMAIS,
          data: res.data,
        });
      })
      .catch(error => {
        console.warn(error.message);
      });
  };
}

export function favoritar(animal, usuario) {
  return {
    type: FAVORITAR,
    data: {
      animal,
      usuario,
    },
  };
}

export function desfavoritar(animal, usuario) {
  return {
    type: DESFAVORITAR,
    data: {
      animal,
      usuario,
    },
  };
}
