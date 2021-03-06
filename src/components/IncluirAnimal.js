import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {incluirAnimal} from '../actions';
import Alerta from '../util/Alerta';
import MantemAnimalForm from './MantemAnimalForm';

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
