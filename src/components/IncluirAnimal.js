import {Button, Header, Icon, Left, Right, Body, Title} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MantemAnimalForm from './MantemAnimalForm';
import {incluirAnimal} from '../actions';
import {bindActionCreators} from 'redux';
import Alerta from '../util/Alerta';

class IncluirAnimal extends Component {
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

  handleIncluirAnimal = animal => {
    animal.favoritoUsuarios = [];
    this.props
      .incluirAnimal(animal)
      .then(() => this.props.navigation.navigate('ListaAnimais'))
      .catch(err => Alerta.mensagem('Erro ao incluir animal: ' + err.message));
  };

  render() {
    return <MantemAnimalForm onSubmit={this.handleIncluirAnimal} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({incluirAnimal}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncluirAnimal);
