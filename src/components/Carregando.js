import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Carregando extends Component {
  render() {
    return (
      this.props.loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Carregando);

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
