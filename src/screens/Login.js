import {
  Button,
  Form,
  Input,
  Item as FormItem,
  Label,
  Text,
  Content,
} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
    };
  }

  login = () => {
    this.props.login(this.state.usuario, this.state.senha);
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
              value={this.state.text}
            />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Senha</Label>
            <Input
              secureTextEntry={true}
              onChangeText={text => this.setState({senha: text})}
              value={this.state.text}
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

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  botaoLogin: {marginTop: 10},
});
