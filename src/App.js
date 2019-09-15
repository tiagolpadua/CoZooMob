import {Container, Content, Header, Title} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import Login from './screens/Login';

const store = configureStore();

const AppNavigator = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
  },
);

const Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header style={styles.header}>
            <Title>Controle de Animais</Title>
          </Header>
          <Navigation />
        </Container>
      </Provider>
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
