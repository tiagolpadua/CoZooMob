import {Container, Content, Header, Title} from 'native-base';
import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  animais as animaisData,
  usuarioLogado as usuarioLogadoData,
} from '../../data.json';
import Animal from './Animal';

export default class ListaAnimais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animais: animaisData,
      usuarioLogado: usuarioLogadoData,
    };
  }

  render() {
    const {animais, usuarioLogado} = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Title>Controle de Animais</Title>
        </Header>
        <Content padder>
          <FlatList
            data={animais}
            renderItem={({item}) => (
              <Animal animal={item} usuarioLogado={usuarioLogado} />
            )}
            keyExtractor={item => item.nome}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {height: 30},
  separator: {
    height: 1,
    backgroundColor: '#CED0CE',
    marginBottom: 10,
  },
});
