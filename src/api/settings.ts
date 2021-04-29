import axios from 'axios'

const settings = {
    baseURL: 'https://datainlife.ru/junior_task/get_products.php'
}

export const instance = axios.create(settings)