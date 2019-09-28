import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Reactotron from '../ReactotronConfig';

export default function configureStore() {
  let store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      Reactotron.createEnhancer(),
    ),
  );
  return store;
}
