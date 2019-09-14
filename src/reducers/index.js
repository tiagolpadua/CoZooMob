import {combineReducers} from 'redux';
import animaisReducer from './animais';
import usuarioLogadoReducer from './usuarioLogado';

const rootReducer = combineReducers({
  animais: animaisReducer,
  usuarioLogado: usuarioLogadoReducer,
});

export default rootReducer;
