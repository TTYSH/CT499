const CartService = require("../services/cart.service");
const MongoDB = require("../utils/mongodb.util");


class cartController {
    async findOne(req, res, next) {
        try {
            const cartService = new CartService(MongoDB.client);
            const cartItems = await cartService.getCartByUserId(req.params.id);
            return res.send(cartItems || []);
        } catch (error) {
            console.log(error);
            return res.status(500).send("Lỗi khi lấy thông tin giỏ hàng.");
        }
    }

    async addItem(req, res, next) {
        try {
            const { userId, bookId, quantity } = req.body;
            if (!userId || !bookId) {
                return res.status(400).send({ message: "Thiếu thông tin user hoặc sách." });
            }
            const cartService = new CartService(MongoDB.client);
            await cartService.addCartItem(userId, Number(bookId), quantity || 1);
            return res.send({ message: "Thêm vào giỏ hàng thành công!" });
        } catch (error) {
            console.log(error);
            return res.status(500).send("Lỗi khi thêm vào giỏ hàng.");
        }
    };

    async removeItem(req, res, next) {
        try {
            const cartService = new CartService(MongoDB.client);
            const success = await cartService.removeCartItem(req.params.itemId);
            if (success) {
                return res.send({ message: "Đã xoá sản phẩm khỏi giỏ hàng" });
            }
            return res.status(404).send({ message: "Không tìm thấy sản phẩm này trong giỏ" });
        } catch (error) {
            console.log(error);
            return res.status(500).send("Lỗi khi xoá sản phẩm khỏi giỏ hàng.");
        }
    }

    async updateQuantity(req, res, next) {
        try {
            const { quantity } = req.body;
            if (quantity === undefined) {
                return res.status(400).send({ message: "Thiếu thông tin số lượng." });
            }
            const cartService = new CartService(MongoDB.client);
            await cartService.updateCartItemQuantity(req.params.itemId, Number(quantity));
            return res.send({ message: "Cập nhật số lượng thành công" });
        } catch (error) {
            console.log(error);
            return res.status(500).send("Lỗi khi cập nhật số lượng.");
        }
    }
}

module.exports = new cartController();
