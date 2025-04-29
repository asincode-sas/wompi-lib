import axios from 'axios'

/**
 * Crea un nuevo cliente de axios con la configuración base
 * para la API de la aplicación.
 * @param {object} config - Configuración de la API
 * @param {string} config.baseURL - URL base de la API
 * @param {string} config.privateKey - Clave privada para la autenticación
 * @returns {import('axios').AxiosInstance} - Instancia de axios configurada
 * @example
 * const apiClient = axiosConfig({
 *  baseURL: 'https://api.example.com',
 *  privateKey: 'your-private-key',
 * })
 * const response = await apiClient.get('/endpoint')
 */
export const axiosConfig = ({ baseURL, privateKey }) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${privateKey}`,
    },
  })
}