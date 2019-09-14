import {Body, Card, CardItem} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import BotaoFavoritar from './BotaoFavoritar';

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

  favoritar = () => {
    const {animal} = this.state;
    const {usuarioLogado} = this.props;

    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = [
      ...novoAnimal.favoritoUsuarios,
      usuarioLogado,
    ];

    this.setState({animal: novoAnimal});
  };

  desfavoritar = () => {
    const {animal} = this.state;
    const {usuarioLogado} = this.props;

    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = novoAnimal.favoritoUsuarios.filter(
      usuario => usuario !== usuarioLogado,
    );

    this.setState({animal: novoAnimal});
  };

  render() {
    const {animal} = this.state;
    const {usuarioLogado} = this.props;

    return (
      <Card>
        <CardItem header bordered>
          <Text style={styles.nomeAnimal}>{animal.nome}</Text>
        </CardItem>
        <CardItem bordered>
          <Body style={styles.imageContainer}>
            <Image
              source={{
                uri: animal.urlImagem,
              }}
              style={styles.imagemAnimal}
            />
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <BotaoFavoritar
            favoritado={this.isFavoritado(animal, usuarioLogado)}
            favoritarCallback={this.favoritar}
            desfavoritarCallback={this.desfavoritar}
          />
          <Text>
            Este animal
            {animal.favoritoUsuarios.length > 0
              ? ` já foi favoritado por ${animal.favoritoUsuarios.length} usuário(s)`
              : ' ainda não foi favoritado'}
          </Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  nomeAnimal: {fontSize: 18, fontWeight: 'bold'},
  imagemAnimal: {width: width * 0.7, height: width * 0.7},
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
