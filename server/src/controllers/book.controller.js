const BookService = require("../services/book.service");
const MongoDB = require("../utils/mongodb.util");

class BookController {
    async findAll(req, res, next) {
        let documents = [];
        try {
            const bookService = new BookService(MongoDB.client);
            documents = await bookService.find({});
            return res.send(documents);
        } catch (error) {
            return res.status(500).json({ message: "Lỗi khi lấy danh sách sách lỗi findAll", error: error.message });
        }
    };
    async findOne(req, res, next) {
        try {
            const bookService = new BookService(MongoDB.client);
            const document = await bookService.findById(req.params.id);
            if (!document) {
                return res.status(404).json({ message: "Không tìm thấy sách" });
            }
            return res.send(document);
        } catch (error) {
            return res.status(500).json({ message: `Lỗi khi tìm sách với id = ${req.params.id}`, error: error.message });
        }
    };
}
module.exports = new BookController();
