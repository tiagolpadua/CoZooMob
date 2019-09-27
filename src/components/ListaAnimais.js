import {Content, Fab, Icon, View} from 'native-base';
import React, {Component} from 'react';
import {FlatList, StyleSheet, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {carregarAnimais} from '../actions';
import Animal from './Animal';

class ListaAnimais extends Component {
  componentDidMount() {
    this.props.carregarAnimais();
  }

  state = {
    isFetching: false,
  };

  onRefresh() {
    this.setState({isFetching: true}, () => this.props.carregarAnimais());
    // this.setState({isFetching: true}, () => console.warn('refresh'));
  }

  render() {
    const {animais, navigation} = this.props;
    return (
      <View style={styles.container}>
        <Content
          padder
          refreshControl={
            <RefreshControl
              refreshing={this.state.isFetching}
              onRefresh={() => this.onRefresh()}
            />
          }>
          <FlatList
            data={animais}
            renderItem={({item}) => (
              <Animal navigation={navigation} animal={item} />
            )}
            keyExtractor={item => item.nome}
          />
        </Content>
        <Fab
          containerStyle={{}}
          style={styles.fab}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('IncluirAnimal')}>
          <Icon name="add" />
        </Fab>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {backgroundColor: '#5067FF'},
});
