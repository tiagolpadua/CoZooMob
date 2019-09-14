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

  isFavoritado(animal, usuarioLogado) {
    return !!animal.favoritoUsuarios.find(usuario => usuario === usuarioLogado);
  }

  favoritar = (animal, usuarioLogado) => {
    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = [
      ...novoAnimal.favoritoUsuarios,
      usuarioLogado,
    ];

    this.setState({animal: novoAnimal});
  };

  desfavoritar = (animal, usuarioLogado) => {
    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = novoAnimal.favoritoUsuarios.filter(
      usuario => usuario !== usuarioLogado,
    );

    this.setState({animal: novoAnimal});
  };

  botaoFavorito(animal, usuarioLogado) {
    let favoritado = this.isFavoritado(animal, usuarioLogado);

    if (favoritado) {
      return (
        <TouchableOpacity
          onPress={() => this.desfavoritar(animal, usuarioLogado)}>
          <Icon name="star" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => this.favoritar(animal, usuarioLogado)}>
          <Icon name="star-outline" />
        </TouchableOpacity>
      );
    }
  }

  render() {
    const {animal} = this.state;
    const {usuarioLogado} = this.props;

    return (
      <View>
        <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        <Image
          source={{
            uri: animal.urlImagem,
          }}
          style={styles.imagemAnimal}
        />
        {this.botaoFavorito(animal, usuarioLogado)}
        <Text>
          Este animal
          {animal.favoritoUsuarios.length > 0
            ? ` já foi favoritado por ${animal.favoritoUsuarios.length} usuário(s)`
            : ' ainda não foi favoritado'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 16},
  imagemAnimal: {width, height: width},
});
