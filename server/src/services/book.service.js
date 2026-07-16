class BookService {
    constructor(client) {
        this.Book = client.db().collection("book");
    }

    async find(filter) {
        const cursor = await this.Book.find(filter);
        return await cursor.toArray();
    }
}

module.exports = BookService;