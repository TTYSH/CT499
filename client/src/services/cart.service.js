import createApiClient from "./api.service";

class CartService {
    constructor(baseUrl = "/api/cart") {
        this.api = createApiClient(baseUrl);
    }

    async get(userId) {
        return (await this.api.get(`/${userId}`)).data;
    }

    async add(data) {
        return (await this.api.post('/add', data)).data;
    }

    async removeItem(itemId) {
        return (await this.api.delete(`/item/${itemId}`)).data;
    }
}

export default new CartService();
