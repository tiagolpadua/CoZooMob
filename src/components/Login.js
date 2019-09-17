import {
  Button,
  Content,
  Form,
  Input,
  Item as FormItem,
  Label,
  Text,
} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions';
import Alerta from '../util/Alerta';
import {StackActions, NavigationActions} from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: 'jose',
      senha: '123456',
    };
  }

  login = () => {
    this.props
      .login(this.state.usuario, this.state.senha)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'ListaAnimais'})],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(() =>
        Alerta.mensagem('Verifique o usuário e senha e tente novamente.'),
      );
  };

  render() {
    return (
      <Content padder>
        <Form>
          <FormItem floatingLabel>
            <Label>Usuario</Label>
            <Input
              onChangeText={text => this.setState({usuario: text})}
              autoCapitalize="none"
              value={this.state.usuario}
            />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Senha</Label>
            <Input
              secureTextEntry={true}
              onChangeText={text => this.setState({senha: text})}
              value={this.state.senha}
            />
          </FormItem>

          <Button full primary style={styles.botaoLogin} onPress={this.login}>
            <Text>Logar</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({login, dispatch}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  botaoLogin: {marginTop: 10},
});
