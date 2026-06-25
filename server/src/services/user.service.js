class UserService {
    constructor(client) {
        this.User = client.db().collection("users");
    }

    // Định nghĩa các phương thức xử lý dữ liệu
    async create(payload) {
        const user = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
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
}

module.exports = UserService;
