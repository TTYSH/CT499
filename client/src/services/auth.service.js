import createApiClient from './api.service';

class AuthService {
    constructor(baseUrl = '/api/auth') {
        this.api = createApiClient(baseUrl);
    }

    async login(credentials) {
        return (await this.api.post('/login', credentials)).data;
    }

    async register(userData) {
        return (await this.api.post('/register', userData)).data;
    }
}

export default new AuthService();
