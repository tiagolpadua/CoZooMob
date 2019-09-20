import {combineReducers} from 'redux';
import animaisReducer from './animais';
import usuarioLogadoReducer from './usuarioLogado';
import loadingReducer from './loading';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  animais: animaisReducer,
  usuarioLogado: usuarioLogadoReducer,
  loading: loadingReducer,
  form: formReducer,
});

export default rootReducer;
