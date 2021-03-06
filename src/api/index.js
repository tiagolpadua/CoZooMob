import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cozooapi.herokuapp.com/v1/',
  // baseURL: 'http://192.168.0.4:3000/v1/',
  // baseURL: 'http://10.0.75.1:3000/v1/',
  // baseURL: 'http://192.168.0.3:3000/v1/',
  // baseURL: 'http://localhost:3000/v1/',
});

export function carregarAnimaisAPI() {
  return api.get('/animais');
}

export function detalharAnimalAPI(id) {
  return api.get(`/animais/${id}`);
}

export function excluirAnimalAPI(animal) {
  return api.delete(`/animais/${animal._id}`);
}

export function incluirAnimalAPI(animal) {
  return api.post('/animais', animal);
}

export function alterarAnimalAPI(animal) {
  return api.put(`/animais/${animal._id}`, animal);
}

export function loginAPI(usuario, senha) {
  return api.post('/login', {usuario, senha}).then(res => {
    api.defaults.headers.common.Authorization = res.data.token;
    return res;
  });
}
