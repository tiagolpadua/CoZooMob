import {Button, Header, Icon, Left, Right, Body, Title} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MantemAnimalForm from './MantemAnimalForm';

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
          <Title>Cadastro de Animal</Title>
        </Body>
        <Right />
      </Header>
    ),
  });

  handleAddAnimal = animal => {
    this.props.addAnimal(animal);
    this.props.navigation.navigate('ListaAnimais');
  };

  render() {
    return <MantemAnimalForm onSubmit={this.handleAddAnimal} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CadastroAnimal);
