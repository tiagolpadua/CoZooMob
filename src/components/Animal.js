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
    this.state = {
      animal: this.props.animal,
    };
  }

  favoritar = () => {
    const {animal} = this.state;
    let novoAnimal = {...animal};
    novoAnimal.favoritado = !novoAnimal.favoritado;
    this.setState({animal: novoAnimal});
  };

  botaoFavorito(animal) {
    let iconeFavorito;

    if (animal.favoritado) {
      iconeFavorito = <Icon name="star" />;
    } else {
      iconeFavorito = <Icon name="star-outline" />;
    }

    return (
      <TouchableOpacity onPress={this.favoritar}>
        {iconeFavorito}
      </TouchableOpacity>
    );
  }

  render() {
    const {animal} = this.state;

    return (
      <View>
        <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        <Image
          source={{
            uri: animal.urlImagem,
          }}
          style={styles.imagemAnimal}
        />
        {this.botaoFavorito(animal)}
        <Text>Foi favoritado: {animal.favoritado + ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});
