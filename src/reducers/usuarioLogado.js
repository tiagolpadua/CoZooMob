import {usuarioLogado} from '../../data.json';

const initialState = usuarioLogado;

export default function usuarioLogadoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
