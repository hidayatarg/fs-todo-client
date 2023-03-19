import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/v1';

const responseBody = (response) => response.data;

const request = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    delete: (url) => axios.delete(url).then(responseBody),
}

const Todo = {
    list: () => request.get(`todo`),
    listOne:(id) => request.get(`todo/${id}`),
    create: (body) => request.post(`todo/new`, body),
    checkCompleted: (id) => request.put(`todo/${id}/completed`, null),
    checkUncompleted: (id) => request.put(`todo/${id}/uncompleted`, null),
    delete: (id) => request.delete(`todo/${id}`)
}

const agent = {
    Todo,
}

export default agent;