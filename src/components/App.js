import React, {Component} from 'react';
import {Image, Text, View, Dimensions} from 'react-native';

export default class App extends Component {
  render() {
    const {width} = Dimensions.get('screen');

    return (
      <View>
        <Text style={{fontSize: 16}}>Leão</Text>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/4/40/Just_one_lion.jpg',
          }}
          style={{width, height: width}}
        />
      </View>
    );
  }
}
