const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");

class UserController {
    async create(req, res) {
        try {
            const userService = new UserService(MongoDB.client);
            const document = await userService.create(req.body);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi tạo người dùng.");
        }
    }
    async update(req, res) {
        try {
            const userService = new UserService(MongoDB.client);
            const document = await userService.update(req.params.id, req.body);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi cập nhật người dùng.");
        }
    };
    async findById(req, res) {
        try {
            const userService = new UserService(MongoDB.client);
            const document = await userService.findById(req.params.id);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi tìm người dùng.");
        }
    };

}

module.exports = new UserController();