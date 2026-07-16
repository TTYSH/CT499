class TacGiaService {
    constructor(client) {
        this.TacGia = client.db().collection("author");
    }
    
    async find(filter) {
        const cursor = await this.TacGia.find(filter);
        return await cursor.toArray();
    }
}

module.exports = TacGiaService;