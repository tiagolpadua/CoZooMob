import {Button, Content, Form, Input, Item, Label, Text} from 'native-base';
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import validator from 'validator';

const {width} = Dimensions.get('screen');

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

        <View style={styles.previewContainer}>
          <Text style={styles.titulo}>Preview</Text>

          {validator.isURL(this.props.urlImagem || '') && (
            <Image
              source={{
                uri: this.props.urlImagem,
              }}
              style={styles.imagemAnimal}
            />
          )}
        </View>
      </Content>
    );
  }
}

MantemAnimalForm = reduxForm({
  form: 'mantemAnimal',
  validate,
})(MantemAnimalForm);

const selector = formValueSelector('mantemAnimal');
MantemAnimalForm = connect(state => ({
  urlImagem: selector(state, 'urlImagem'),
}))(MantemAnimalForm);

export default MantemAnimalForm;

const styles = StyleSheet.create({
  botaoSalvar: {marginTop: 10},
  imagemAnimal: {width: width * 0.7, height: width * 0.7},
  titulo: {fontSize: 18, fontWeight: 'bold', marginTop: 10},
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
