const { ObjectId } = require("mongodb");

class RequestService {
    constructor(client) {
        this.client = client;
        this.Request = client.db().collection("YEUCAU");
        this.RequestDetail = client.db().collection("CHITIET_YEUCAU");
        this.Cart = client.db().collection("GIOHANG");
        this.CartDetail = client.db().collection("CHITIET_GIOHANG");
    }

    async createRequest(userId) {
        let userObjId = ObjectId.isValid(userId) ? new ObjectId(userId) : null;
        if (!userObjId) return { success: false, message: "Người dùng không hợp lệ" };

        const cart = await this.Cart.findOne({ MaND: userObjId });
        if (!cart) return { success: false, message: "Giỏ hàng trống" };

        const cartItems = await this.CartDetail.find({ MaGH: cart._id }).toArray();
        if (cartItems.length === 0) return { success: false, message: "Giỏ hàng trống" };

        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        const NgayTao = `${d}/${m}/${y}`;

        // Get max _id from YEUCAU
        // Get max _id from YEUCAU (chỉ lấy _id là số)
        const lastRequest = await this.Request.find({ _id: { $type: "number" } }).sort({ _id: -1 }).limit(1).toArray();
        let nextRequestId = lastRequest.length > 0 ? lastRequest[0]._id + 1 : 1;

        const newRequest = {
            _id: nextRequestId,
            MaND: userObjId,
            NgayTao: NgayTao,
            TrangThai: "ChoDuyet"
        };
        await this.Request.insertOne(newRequest);

        // Get max _id from CHITIET_YEUCAU (chỉ lấy _id là số)
        const lastDetail = await this.RequestDetail.find({ _id: { $type: "number" } }).sort({ _id: -1 }).limit(1).toArray();
        let nextDetailId = lastDetail.length > 0 ? lastDetail[0]._id + 1 : 1;
        for (let item of cartItems) {
            const detailDoc = {
                _id: nextDetailId++,
                MaYC: nextRequestId,
                MaSach: item.MaSach,
                SoLuong: item.SoLuong
            };
            await this.RequestDetail.insertOne(detailDoc);
        }

        // Xóa giỏ hàng sau khi mượn
        await this.CartDetail.deleteMany({ MaGH: cart._id });

        return { success: true, message: "Gửi yêu cầu mượn thành công" };
    }
}

module.exports = RequestService;
