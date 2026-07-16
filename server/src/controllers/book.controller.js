const BookService = require("../services/book.service");
const MongoDB = require("../utils/mongodb.util");

class BookController {
    async findAll(req, res, next) {
        try {
            const bookService = new BookService(MongoDB.client);
            const document = await bookService.find();
            return res.send(document);
        } catch (error) {
            return res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách sách."});
        }
    }
}

module.exports = new BookController();