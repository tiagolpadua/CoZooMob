import {
  Button,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const validate = values => {
  const error = {};
  error.email = '';
  error.name = '';
  var ema = values.email;
  var nm = values.name;
  if (values.email === undefined) {
    ema = '';
  }
  if (values.name === undefined) {
    nm = '';
  }
  if (ema.length < 8 && ema !== '') {
    error.email = 'too short';
  }
  if (!ema.includes('@') && ema !== '') {
    error.email = '@ not included';
  }
  if (nm.length > 8) {
    error.name = 'max 8 characters';
  }
  return error;
};
class CadastroAnimal extends Component {
  static navigationOptions = ({navigation}) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Right />
      </Header>
    ),
  });
  render() {
    return (
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="Nome" />
          </Item>
          <Item last>
            <Input placeholder="URL Imagem" />
          </Item>
          <Button
            full
            primary
            style={styles.botaoSalvar}
            onPress={() => console.warn('Salvar!')}>
            <Text>Salvar</Text>
          </Button>
        </Form>
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

const styles = StyleSheet.create({
  botaoSalvar: {marginTop: 10},
});
