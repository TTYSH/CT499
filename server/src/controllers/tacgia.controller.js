const TacGiaService = require("../services/tacgia.service");
const MongoDB = require("../utils/mongodb.util");

class TacGiaController {
    async findAll (req, res, next){
        try {
            const tacGiaService = new TacGiaService(MongoDB.client);
            const document = await tacGiaService.find();
            return res.send(document);
        } catch (error) {
            return res.status(500).json({ message: "Đã xảy ra lỗi khi lấy danh sách tác giả. "})
        }
    }
}

module.exports = new TacGiaController();