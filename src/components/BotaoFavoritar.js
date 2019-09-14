import {Icon} from 'native-base';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

export default class BotaoFavoritar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: this.props.animal,
      usuarioLogado: this.props.usuarioLogado,
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

  render() {
    const {animal, usuarioLogado} = this.state;

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
}
