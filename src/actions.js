import {carregarAnimaisAPI} from './api';
import {CARREGAR_ANIMAIS, DESFAVORITAR, FAVORITAR} from './constants';

export function carregarAnimais() {
  carregarAnimaisAPI()
    .then(res => ({
      type: CARREGAR_ANIMAIS,
      data: res.data,
    }))
    .catch(error => {
      console.warn(error.message);
    });
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
