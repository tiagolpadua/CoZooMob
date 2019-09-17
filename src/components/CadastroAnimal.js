import {
  Content,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class CadastroAnimal extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Incluir Animal</Title>
        </Body>
        <Right />
      </Header>
    ),
  });
  render() {
    return (
      <Content padder>
        <Text>Tela de Cadastro de Animal</Text>
      </Content>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CadastroAnimal);
