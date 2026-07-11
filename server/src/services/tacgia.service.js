const { ObjectId } = require("mongodb");

class TacGiaService {
    constructor(client) {
        this.TacGia = client.db().collection("TACGIA");
    }

    async findById(id) {
        let queryId = id;
        if (ObjectId.isValid(id)) {
            queryId = new ObjectId(id);
        } else if (!isNaN(id)) {
            queryId = parseInt(id, 10);
        }
        return await this.TacGia.findOne({ _id: queryId });
    }
}

module.exports = TacGiaService;
