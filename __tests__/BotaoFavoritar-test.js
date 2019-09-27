/**
 * @format
 */

import 'react-native';
import React from 'react';
import BotaoFavoritar from '../src/components/BotaoFavoritar';

import renderer from 'react-test-renderer';

it('renderiza se favoritado é true', () => {
  const tree = renderer
    .create(
      <BotaoFavoritar
        favoritado={true}
        favoritarCallback={() => {}}
        desfavoritarCallback={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renderiza se favoritado é false', () => {
  const tree = renderer
    .create(
      <BotaoFavoritar
        favoritado={false}
        favoritarCallback={() => {}}
        desfavoritarCallback={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
