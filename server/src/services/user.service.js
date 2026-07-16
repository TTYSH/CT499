class UserService {
    constructor(client) {
        this.User = client.db().collection("user");
    }

    // Định nghĩa các phương thức xử lý dữ liệu
    async create(payload) {
        const user = {
            HoTen: payload.name,
            Email: payload.email,
            Password: payload.password,
            SoDienThoai: "",
            LoaiTaiKhoan: "KhachHang"
        };

        if (payload.address) {
            user.DiaChi = payload.address;
        }
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

    async update(id, payload) {
        const { ObjectId } = require("mongodb");
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const updateDoc = {
            $set: payload
        };
        const result = await this.User.findOneAndUpdate(
            filter,
            updateDoc,
            { returnDocument: "after" }
        );
        return result.value || result;
    }
}

module.exports = UserService;