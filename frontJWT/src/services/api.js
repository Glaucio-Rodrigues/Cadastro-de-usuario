
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // ou a URL correta do seu back-end
});

export default api;

{/* pegando dados do backend na porta 3000 */}