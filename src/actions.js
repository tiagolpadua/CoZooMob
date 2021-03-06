import {
  carregarAnimaisAPI,
  loginAPI,
  incluirAnimalAPI,
  alterarAnimalAPI,
  excluirAnimalAPI,
} from './api';
import {
  LOGIN,
  CARREGAR_ANIMAIS,
  DESFAVORITAR,
  FAVORITAR,
  SET_LOADING,
  INCLUIR_ANIMAL,
  ALTERAR_ANIMAL,
  EXCLUIR_ANIMAL,
} from './constants';

function loadingWrapper(asyncFunc) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      data: true,
    });
    return asyncFunc(dispatch).finally(() => {
      dispatch({
        type: SET_LOADING,
        data: false,
      });
    });
  };
}

export function login(usuario, senha) {
  return loadingWrapper(dispatch =>
    loginAPI(usuario, senha).then(res => {
      dispatch({
        type: LOGIN,
        data: usuario,
      });
    }),
  );
}

export function carregarAnimais() {
  return loadingWrapper(dispatch =>
    carregarAnimaisAPI().then(res => {
      dispatch({
        type: CARREGAR_ANIMAIS,
        data: res.data,
      });
    }),
  );
}

export function incluirAnimal(animal) {
  return loadingWrapper(dispatch =>
    incluirAnimalAPI(animal).then(res => {
      dispatch({
        type: INCLUIR_ANIMAL,
        data: res.data,
      });
    }),
  );
}

export function alterarAnimal(animal) {
  return loadingWrapper(dispatch =>
    alterarAnimalAPI(animal).then(res => {
      dispatch({
        type: ALTERAR_ANIMAL,
        data: res.data,
      });
    }),
  );
}

export function excluirAnimal(animal) {
  return loadingWrapper(dispatch =>
    excluirAnimalAPI(animal).then(res => {
      dispatch({
        type: EXCLUIR_ANIMAL,
        data: animal,
      });
    }),
  );
}

export function favoritar(animal, usuario) {
  const novoAnimal = {...animal};
  novoAnimal.favoritoUsuarios = [...novoAnimal.favoritoUsuarios, usuario];
  return loadingWrapper(dispatch =>
    alterarAnimalAPI(novoAnimal).then(res => {
      dispatch({
        type: ALTERAR_ANIMAL,
        data: res.data,
      });
    }),
  );
}

export function desfavoritar(animal, usuario) {
  const novoAnimal = {...animal};
  novoAnimal.favoritoUsuarios = novoAnimal.favoritoUsuarios.filter(
    u => u !== usuario,
  );
  return loadingWrapper(dispatch =>
    alterarAnimalAPI(novoAnimal).then(res => {
      dispatch({
        type: ALTERAR_ANIMAL,
        data: res.data,
      });
    }),
  );
}
