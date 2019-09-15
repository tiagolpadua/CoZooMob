import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://cozooapi.herokuapp.com/v1/',
  baseURL: 'localhost:3000/v1/',
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
