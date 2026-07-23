const LedgerService = require("../services/ledger.service");
const MongoDB = require("../utils/mongodb.util");

class LedgerController {
    async findAllByUser(req, res) {
        try {
            const ledgerService = new LedgerService(MongoDB.client);
            const documents = await ledgerService.findByUserId(req.params.id);
            return res.send(documents);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Đã xảy ra lỗi khi tải lịch sử đơn mượn.");
        }
    }
}

module.exports = new LedgerController();
