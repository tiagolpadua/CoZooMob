import {animais} from '../../data.json';

const initialState = animais;

export default function animaisReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
