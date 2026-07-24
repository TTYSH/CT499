import createApiClient from "./api.service";

class RequestService {
    constructor(baseUrl = "/api/requests") {
        this.api = createApiClient(baseUrl);
    }

    async checkout(userId) {
        return (await this.api.post("/", { userId })).data;
    }
}

export default new RequestService();
