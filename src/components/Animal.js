import {Icon} from 'native-base';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width} = Dimensions.get('screen');

export default class Animal extends Component {
  state = {
    contador: 0,
  };

  render() {
    const {animal} = this.props;
    return (
      <View>
        <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        <Image
          source={{
            uri: animal.urlImagem,
          }}
          style={styles.imagemAnimal}
        />
        <TouchableOpacity
          onPress={() => this.setState({contador: this.state.contador + 1})}>
          <Icon name="star" />
        </TouchableOpacity>
        <Text>Foi favoritado {this.state.contador} vezes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});
