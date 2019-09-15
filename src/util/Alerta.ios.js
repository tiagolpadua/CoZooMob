import {AlertIOS} from 'react-native';

export default class Alerta {
  static mensagem(texto) {
    AlertIOS.alert('Atenção', texto);
  }
}
