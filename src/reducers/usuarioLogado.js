import {LOGIN} from '../constants';

const initialState = null;

export default function usuarioLogadoReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.data;

    default:
      return state;
  }
}
