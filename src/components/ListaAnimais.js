import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Animal from './Animal';
import {carregarAnimais} from '../actions';
import {bindActionCreators} from 'redux';

class ListaAnimais extends Component {
  componentDidMount() {
    this.props.carregarAnimais();
  }

  render() {
    const {animais} = this.props;
    return (
      <FlatList
        data={animais}
        renderItem={({item}) => <Animal animal={item} />}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({carregarAnimais}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListaAnimais);
