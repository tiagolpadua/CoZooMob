import {Content} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class CadastroAnimal extends Component {
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
