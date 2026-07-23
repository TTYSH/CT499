import createApiClient from "./api.service";

class LedgerService {
    constructor(baseUrl = "/api/ledger") {
        this.api = createApiClient(baseUrl);
    }

    async getByUser(userId) {
        return (await this.api.get(`/user/${userId}`)).data;
    }

    async create(data) {
        return (await this.api.post("/", data)).data;
    }

    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new LedgerService();
