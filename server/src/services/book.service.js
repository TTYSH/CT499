const { ObjectId } = require("mongodb");

class BookService {
    constructor(client) {
        this.client = client;
        this.Book = client.db().collection("SACH");
    }

    async find(filter) {
        const cursor = await this.Book.find(filter);
        return await cursor.toArray();
    }

    async getCategories() {
        return await this.Book.distinct("TheLoai");
    }

    async getNewBooks(limit = 5) {
        const cursor = await this.Book.find({}).sort({ NgayThemSach: -1 }).limit(limit);
        return await cursor.toArray();
    }

    async findById(id) {
        let queryId = id;
        if (ObjectId.isValid(id) && typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        } else if (!isNaN(id)) {
            queryId = Number(id);
        }

        return await this.Book.findOne({ _id: queryId });
    }
}

module.exports = BookService;