const RequestService = require("../services/request.service");
const MongoDB = require("../utils/mongodb.util");

class requestController {
    async checkout(req, res, next) {
        try {
            const { userId } = req.body;
            if (!userId) {
                return res.status(400).send({ message: "Thiếu thông tin người dùng." });
            }
            const requestService = new RequestService(MongoDB.client);
            const result = await requestService.createRequest(userId);
            if (result.success) {
                return res.send({ message: result.message });
            } else {
                return res.status(400).send({ message: result.message });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send("Lỗi khi tạo yêu cầu mượn.");
        }
    }
}

module.exports = new requestController();
