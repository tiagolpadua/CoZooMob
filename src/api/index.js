import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cozooapi.herokuapp.com/v1/',
  // baseURL: 'http://192.168.0.4:3000/v1/',
  // baseURL: 'http://10.0.75.1:3000/v1/',
});

export function carregarAnimaisAPI() {
  return api.get('/animais');
}

export function detalharAnimalAPI(id) {
  return api.get(`/animais/${id}`);
}

export function excluirAnimalAPI(id) {
  return api.delete(`/animais/${id}`);
}

export function incluirAnimalAPI(animal) {
  return api.post('/animais', animal);
}

export function atualizarAnimalAPI(animal) {
  return api.put(`/animais/${animal._id}`, animal);
}

export function loginAPI(usuario, senha) {
  return api.post('/login', {usuario, senha});
}
