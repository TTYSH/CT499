const TacGiaService = require("./tacgia.service");

class BookService {
    constructor(client) {
        this.Book = client.db().collection("SACH");
        this.tacGiaService = new TacGiaService(client);
    }

    async find(filter = {}) {
        const books = await this.Book.find(filter).toArray();
        await Promise.all(books.map(async (book) => {
            if (book.MaTG) {
                const author = await this.tacGiaService.findById(book.MaTG);
                book.TenTG = author ? author.TenTG : "Chưa rõ";
            } else {
                book.TenTG = "Chưa rõ";
            }
        }));
        return books;
    }

    async findById(id) {
        const { ObjectId } = require("mongodb");
        let queryId = id;
        if (ObjectId.isValid(id)) {
            queryId = new ObjectId(id);
        } else if (!isNaN(id)) {
            queryId = parseInt(id, 10);
        }
        
        const book = await this.Book.findOne({ _id: queryId });
        if (book) {
            if (book.MaTG) {
                const author = await this.tacGiaService.findById(book.MaTG);
                book.TenTG = author ? author.TenTG : "Chưa rõ";
            } else {
                book.TenTG = "Chưa rõ";
            }
        }
        return book;
    }
}

module.exports = BookService;
