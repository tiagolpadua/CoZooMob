import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Animal from './Animal';

class ListaAnimais extends Component {
  favoritar = animal => {
    const {usuarioLogado} = this.state;

    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = [
      ...novoAnimal.favoritoUsuarios,
      usuarioLogado,
    ];

    this.atualizarAnimal(novoAnimal);
  };

  desfavoritar = animal => {
    const {usuarioLogado} = this.state;

    let novoAnimal = {...animal};

    novoAnimal.favoritoUsuarios = novoAnimal.favoritoUsuarios.filter(
      usuario => usuario !== usuarioLogado,
    );

    this.atualizarAnimal(novoAnimal);
  };

  atualizarAnimal = novoAnimal => {
    const novosAnimais = this.state.animais.map(a =>
      a._id === novoAnimal._id ? novoAnimal : a,
    );

    this.setState({animais: novosAnimais});
  };

  render() {
    const {animais, usuarioLogado} = this.props;
    return (
      <FlatList
        data={animais}
        renderItem={({item}) => (
          <Animal
            animal={item}
            usuarioLogado={usuarioLogado}
            favoritarCallback={this.favoritar}
            desfavoritarCallback={this.desfavoritar}
          />
        )}
        keyExtractor={item => item.nome}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    animais: state.animais,
    usuarioLogado: state.usuarioLogado,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaAnimais);
