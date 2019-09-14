import {Container, Content, Header, Title, View} from 'native-base';
import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Animal from './Animal';
import {
  animais as animaisData,
  usuarioLogado as usuarioLogadoData,
} from '../../data.json';

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
        <Content>
          <FlatList
            data={animais}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
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
