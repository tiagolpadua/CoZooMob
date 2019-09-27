import {Icon} from 'native-base';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class BotaoFavoritar extends Component {
  static propTypes = {
    favoritado: PropTypes.bool.isRequired,
    favoritarCallback: PropTypes.func.isRequired,
    desfavoritarCallback: PropTypes.func.isRequired,
  };

  render() {
    const {favoritado, favoritarCallback, desfavoritarCallback} = this.props;

    if (favoritado) {
      return (
        <TouchableOpacity onPress={desfavoritarCallback}>
          <Icon name="star" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={favoritarCallback}>
          <Icon name="star-outline" />
        </TouchableOpacity>
      );
    }
  }
}
