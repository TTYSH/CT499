
class TacgiaController {
    async create(req, res) {
        try {
            const tacgiaService = new TacgiaService(MongoDB.client);
            const document = await tacgiaService.create(req.body);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi tạo tác giả.");
        }
    }
    async update(req, res) {
        try {
            const tacgiaService = new TacgiaService(MongoDB.client);
            const document = await tacgiaService.update(req.params.id, req.body);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi cập nhật tác giả.");
        }
    };
    async findById(req, res) {
        try {
            const tacgiaService = new TacgiaService(MongoDB.client);
            const document = await tacgiaService.findById(req.params.id);
            return res.send(document);
        } catch (error) {
            return res.status(500).send("Đã xảy ra lỗi khi tìm tác giả.");
        }
    };
}