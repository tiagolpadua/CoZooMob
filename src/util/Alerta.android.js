import {ToastAndroid} from 'react-native';

export default class Alerta {
  static mensagem(texto) {
    ToastAndroid.show(texto, ToastAndroid.LONG);
  }
}
