const { ObjectId } = require("mongodb");

class CartService {
    constructor(client) {
        this.client = client;
        this.Cart = client.db().collection("GIOHANG");
        this.CartDetail = client.db().collection("CHITIET_GIOHANG");
    }

    async getCartByUserId(userId) {
        let userObjId = ObjectId.isValid(userId) ? new ObjectId(userId) : null;
        if (!userObjId) return [];

        const cart = await this.Cart.findOne({ MaND: userObjId });
        if (!cart) return [];

        // Aggregate to join cart details with book info
        const items = await this.CartDetail.aggregate([
            { $match: { MaGH: cart._id } },
            {
                $lookup: {
                    from: "SACH",
                    localField: "MaSach",
                    foreignField: "_id",
                    as: "bookInfo"
                }
            },
            { $unwind: "$bookInfo" }
        ]).toArray();

        return items;
    }

    async removeCartItem(itemId) {
        const objId = ObjectId.isValid(itemId) ? new ObjectId(itemId) : null;
        if (!objId) return false;
        const result = await this.CartDetail.deleteOne({ _id: objId });
        return result.deletedCount > 0;
    }

    async addCartItem(userId, bookId, quantity = 1) {
        let userObjId = ObjectId.isValid(userId) ? new ObjectId(userId) : null;
        if (!userObjId) return false;

        let cart = await this.Cart.findOne({ MaND: userObjId });
        if (!cart) {
            const result = await this.Cart.insertOne({ MaND: userObjId });
            cart = { _id: result.insertedId };
        }

        const existingItem = await this.CartDetail.findOne({ MaGH: cart._id, MaSach: bookId });
        if (existingItem) {
            const newQuantity = existingItem.SoLuong + quantity;
            await this.CartDetail.updateOne(
                { _id: existingItem._id },
                { $set: { SoLuong: newQuantity } }
            );
        } else {
            await this.CartDetail.insertOne({
                MaGH: cart._id,
                MaSach: bookId,
                SoLuong: quantity
            });
        }
        return true;
    }

    async updateCartItemQuantity(itemId, quantity) {
        const objId = ObjectId.isValid(itemId) ? new ObjectId(itemId) : null;
        if (!objId) return false;
        
        if (quantity <= 0) {
            return await this.removeCartItem(itemId);
        }

        const result = await this.CartDetail.updateOne(
            { _id: objId },
            { $set: { SoLuong: quantity } }
        );
        return result.modifiedCount > 0 || result.matchedCount > 0;
    }
}

module.exports = CartService;
