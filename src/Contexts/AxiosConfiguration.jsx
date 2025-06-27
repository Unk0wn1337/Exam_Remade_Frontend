import axios from 'axios'

export const AxiosConfiguration = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'Application/json'
  }
})
