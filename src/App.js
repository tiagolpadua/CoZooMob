import {Body, Container, Header, Left, Title} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import Carregando from './components/Carregando';
import IncluirAnimal from './components/IncluirAnimal';
import ListaAnimais from './components/ListaAnimais';
import Login from './components/Login';
import configureStore from './configureStore';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Login,
    ListaAnimais,
    IncluirAnimal,
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
