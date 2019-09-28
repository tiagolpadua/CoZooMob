import {Icon} from 'native-base';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

export default class BotaoFavoritar extends Component {
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
