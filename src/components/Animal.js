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
          <BotaoFavoritar animal={animal} usuarioLogado={usuarioLogado} />
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
