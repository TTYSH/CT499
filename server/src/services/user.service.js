class UserService {
    constructor(client) {
        this.User = client.db().collection("users");
    }

    // Định nghĩa các phương thức xử lý dữ liệu
    async create(payload) {
        const user = {
            HoTen: payload.name,
            Email: payload.email,
            Password: payload.password,
            DiaChi: payload.address,
            // Các trường có thể để trống hoặc giá trị mặc định ban đầu
            SoDienThoai: null,
            AnhBiaND: null,
            LoaiTaiKhoan: "Reader" // Mặc định là tài khoản độc giả
        };
        const result = await this.User.insertOne(user);
        return result;
    }

    async find(filter) {
        const cursor = await this.User.find(filter);
        return await cursor.toArray();
    }

    async findById(id) {
        const { ObjectId } = require("mongodb");
        return await this.User.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async findByEmail(email) {
        return await this.User.findOne({ Email: email });
    }
}

module.exports = UserService;
