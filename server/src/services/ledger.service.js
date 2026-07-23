const { ObjectId } = require("mongodb");

class LedgerService {
    constructor(client) {
        this.client = client;
        this.PhieuMuon = client.db().collection("PHIEUMUON");
        this.ChiTietPhieuMuon = client.db().collection("CHITIET_PHIEUMUON");
        this.Sach = client.db().collection("SACH");
    }

    async findByUserId(userId) {
        let queryId = userId;
        if (ObjectId.isValid(userId) && typeof userId === 'string' && userId.length === 24) {
            queryId = new ObjectId(userId);
        } else if (!isNaN(userId)) {
            queryId = Number(userId);
        }

        // Lấy tất cả phiếu mượn của user
        // Tìm bằng MaND hoặc _id, hỗ trợ cả kiểu Number và String
        const phieuMuons = await this.PhieuMuon.find({ MaND: String(userId) }).toArray();

        // Dùng vòng lặp thay vì $lookup để tránh lỗi không khớp kiểu dữ liệu (Type mismatch)
        for (let phieu of phieuMuons) {
            // Lấy ID phiếu mượn
            const phieuId = phieu.MaPhieuMuon || phieu._id;

            // Tìm chi tiết phiếu mượn
            let chiTiet = await this.ChiTietPhieuMuon.find({
                $or: [
                    { MaPhieuMuon: phieuId },
                    { MaPhieuMuon: String(phieuId) },
                    { phieuMuonId: phieuId },
                    { phieuMuonId: String(phieuId) }
                ]
            }).toArray();

            // Với mỗi chi tiết, lấy thông tin sách
            for (let ct of chiTiet) {
                const sachId = ct.MaSach || ct.SachId || ct.maSach;
                let qSachId = sachId;

                if (ObjectId.isValid(sachId) && typeof sachId === 'string' && sachId.length === 24) {
                    qSachId = new ObjectId(sachId);
                } else if (!isNaN(sachId) && sachId !== undefined) {
                    qSachId = Number(sachId);
                }

                if (sachId !== undefined) {
                    const sach = await this.Sach.findOne({
                        $or: [
                            { _id: qSachId },
                            { _id: String(sachId) },
                            { MaSach: sachId },
                            { MaSach: qSachId }
                        ]
                    });

                    if (sach) {
                        ct.TenSach = sach.TenSach || sach.tenSach;
                        ct.BiaSach = sach.BiaSach || sach.biaSach || sach.HinhAnh;
                    }
                }
            }
            phieu.books = chiTiet; // Gán vào thuộc tính books
        }

        return phieuMuons;
    }
}

module.exports = LedgerService;
