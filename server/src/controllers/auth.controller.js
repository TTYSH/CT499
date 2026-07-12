const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");
const bcrypt = require("bcryptjs");
class AuthController {
    async register(req, res) {
        try {
            const userService = new UserService(MongoDB.client);
            const { name, email, password, address } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin bắt buộc." });
            }
            const existingUser = await userService.findByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: "Email đã được sử dụng." });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const payload = {
                name,
                email,
                password: hashedPassword,
                address: address || ""
            };
            const result = await userService.create(payload);
            return res.status(201).json({ message: "Đăng ký thành công", userId: result.insertedId });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Đã xảy ra lỗi khi tạo người dùng." });
        }
    }
    async login(req, res) {
        try {
            const userService = new UserService(MongoDB.client);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Vui lòng nhập email và mật khẩu." });
            }
            const user = await userService.findByEmail(email);
            if (!user) {
                return res.status(404).json({ message: "Tài khoản không tồn tại." });
            }
            const isMatch = await bcrypt.compare(password, user.Password);
            if (!isMatch) {
                return res.status(401).json({ message: "Mật khẩu không chính xác." });
            }
            const { Password: userPassword, ...userInfo } = user;
            return res.status(200).json(userInfo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Đã xảy ra lỗi khi đăng nhập." });
        }
    }
}
module.exports = new AuthController();