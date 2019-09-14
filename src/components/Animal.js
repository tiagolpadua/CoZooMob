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
  constructor(props) {
    super(props);
    this.favoritar = this.favoritar.bind(this);
    this.state = {
      animal: this.props.animal,
    };
  }

  favoritar() {
    const {animal} = this.state;
    let novoAnimal = {...animal};
    novoAnimal.favoritado = !novoAnimal.favoritado;
    this.setState({animal: novoAnimal});
  }

  render() {
    const {animal} = this.state;

    let iconeFavoritado;

    if (animal.favoritado) {
      iconeFavoritado = <Icon name="star" />;
    } else {
      iconeFavoritado = <Icon name="star-outline" />;
    }

    return (
      <View>
        <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        <Image
          source={{
            uri: animal.urlImagem,
          }}
          style={styles.imagemAnimal}
        />
        <TouchableOpacity onPress={this.favoritar}>
          {iconeFavoritado}
        </TouchableOpacity>
        <Text>Foi favoritado: {animal.favoritado + ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});
