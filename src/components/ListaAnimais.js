import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Animal from './Animal';

export default class ListaAnimais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animais: [
        {
          nome: 'Leão',
          urlImagem:
            'https://upload.wikimedia.org/wikipedia/commons/4/40/Just_one_lion.jpg',
          favoritoUsuarios: [],
        },
        {
          nome: 'Girafa',
          urlImagem:
            'https://upload.wikimedia.org/wikipedia/commons/9/97/Namibie_Etosha_Girafe_02.jpg',
          favoritoUsuarios: ['maria'],
        },
        {
          nome: 'Gato',
          urlImagem:
            'https://upload.wikimedia.org/wikipedia/commons/b/b2/WhiteCat.jpg',
          favoritoUsuarios: ['maria', 'paulo'],
        },
      ],
      usuarioLogado: 'jose',
    };
  }

  render() {
    const {animais, usuarioLogado} = this.state;
    return (
      <View>
        <FlatList
          data={animais}
          renderItem={({item}) => (
            <Animal animal={item} usuarioLogado={usuarioLogado} />
          )}
          keyExtractor={item => item.nome}
        />
      </View>
    );
  }
}
