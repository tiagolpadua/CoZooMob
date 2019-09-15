import {combineReducers} from 'redux';
import animaisReducer from './animais';
import usuarioLogadoReducer from './usuarioLogado';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  animais: animaisReducer,
  usuarioLogado: usuarioLogadoReducer,
  loading: loadingReducer,
});

export default rootReducer;
