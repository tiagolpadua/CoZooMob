import {animais} from '../../data.json';
import {FAVORITAR, DESFAVORITAR, CARREGAR_ANIMAIS} from '../constants.js';

const initialState = animais;

function atualizaAnimal(listaAnimais, animal) {
  return listaAnimais.map(a => (a._id === animal._id ? animal : a));
}

export default function animaisReducer(state = initialState, action) {
  switch (action.type) {
    case CARREGAR_ANIMAIS:
      return action.data;

    case FAVORITAR: {
      const {animal, usuario} = action.data;
      const novoAnimal = {...animal};
      novoAnimal.favoritoUsuarios = [...novoAnimal.favoritoUsuarios, usuario];
      return atualizaAnimal(state, novoAnimal);
    }

    case DESFAVORITAR: {
      const {animal, usuario} = action.data;
      const novoAnimal = {...animal};
      novoAnimal.favoritoUsuarios = novoAnimal.favoritoUsuarios.filter(
        u => u !== usuario,
      );
      return atualizaAnimal(state, novoAnimal);
    }

    default:
      return state;
  }
}
