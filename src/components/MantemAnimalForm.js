import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import validator from 'validator';

const validate = values => {
  const error = {};
  error.nome = '';
  error.urlImagem = '';
  var nome = values.nome || '';
  var urlImagem = values.urlImagem || '';

  if (!validator.isURL(urlImagem)) {
    error.urlImagem = 'URL inválida';
  }

  if (nome.length < 3 || nome.length > 15) {
    error.nome = 'Nome deve ter entre 3 e 15 caracteres';
  }

  return error;
};

class MantemAnimalForm extends Component {
  renderInput = ({input, label, meta: {touched, error}}) => {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item floatingLabel error={hasError}>
        <Label>
          {label} {touched && hasError && ` - ${error}`}
        </Label>
        <Input {...input} />
      </Item>
    );
  };

  render() {
    const {invalid, handleSubmit} = this.props;

    return (
      <Content padder>
        <Form>
          <Field name="nome" label="Nome" component={this.renderInput} />
          <Field
            name="urlImagem"
            label="URL Imagem"
            component={this.renderInput}
          />
          <Button
            disabled={invalid}
            bordered={invalid}
            full
            primary
            style={styles.botaoSalvar}
            onPress={handleSubmit}>
            <Text>Salvar</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

export default reduxForm({
  form: 'mantemAnimal',
  validate,
})(MantemAnimalForm);

const styles = StyleSheet.create({
  botaoSalvar: {marginTop: 10},
});
