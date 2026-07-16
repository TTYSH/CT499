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

    async findOne(req, res, next) {
        try {
            const bookService = new BookService(MongoDB.client);
            const document = await bookService.findById(req.params.id);
            if (!document) {
                return res.status(404).json({ message: "Không tìm thấy sách" });
            }
            return res.send(document);
        } catch (error) {
            return res.status(500).json({ message: "Lỗi khi truy xuất sách" });
        }
    }
}

module.exports = new BookController();