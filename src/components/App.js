import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width} = Dimensions.get('screen');

export default class App extends Component {
  render() {
    const animais = [
      {
        nome: 'Leão',
        urlImagem:
          'https://upload.wikimedia.org/wikipedia/commons/4/40/Just_one_lion.jpg',
      },
      {
        nome: 'Girafa',
        urlImagem:
          'https://upload.wikimedia.org/wikipedia/commons/9/97/Namibie_Etosha_Girafe_02.jpg',
      },
      {
        nome: 'Gato',
        urlImagem:
          'https://upload.wikimedia.org/wikipedia/commons/b/b2/WhiteCat.jpg',
      },
    ];

    return (
      <View>
        <FlatList
          data={animais}
          renderItem={({item}) => (
            <View>
              <Text style={styles.nomeAnimal}>{item.nome}</Text>
              <Image
                source={{
                  uri: item.urlImagem,
                }}
                style={styles.imagemAnimal}
              />
            </View>
          )}
          keyExtractor={item => item.nome}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});

// {/* Novidade aqui! */}
