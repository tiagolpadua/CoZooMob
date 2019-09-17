import {Container, Header, Title, Body, Left, Right} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import ListaAnimais from './components/ListaAnimais';
import CadastroAnimal from './components/CadastroAnimal';
import Login from './components/Login';
import Carregando from './components/Carregando';
import configureStore from './configureStore';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Login,
    ListaAnimais,
    CadastroAnimal,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: () => (
        <Header style={styles.header}>
          <Left />
          <Body>
            <Title>Controle de Animais</Title>
          </Body>
        </Header>
      ),
    },
  },
);

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Navigation />
          <Carregando />
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#CED0CE',
    marginBottom: 10,
  },
});
