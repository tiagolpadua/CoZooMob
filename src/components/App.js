import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('screen');

export default class App extends Component {
  render() {
    const animal = {
      nome: 'Leão',
      urlImagem:
        'https://upload.wikimedia.org/wikipedia/commons/4/40/Just_one_lion.jpg',
    };

    return (
      <View>
        <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        <Image
          source={{
            uri: animal.urlImagem,
          }}
          style={styles.imagemAnimal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});
