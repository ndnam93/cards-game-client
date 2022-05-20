import axios from 'axios'


const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const transResponse = response => response.data;

const getAllCards = () => {
  return axios.get(`${baseUrl}/cards`).then(transResponse);
}

const getUserCards = (email) => {
  return axios.get(`${baseUrl}/cards/collection`, {
    params: {email}
  }).then(transResponse);
}

const updateUserCards = (email, password, cards) => {
  return axios.post('/api/update-cards', {
    email, password, cards
  }).then(transResponse);
}

export default {getAllCards, getUserCards, updateUserCards};
