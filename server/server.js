const app = require("./app");
const config = require("./src/config/index");
const MongoDB = require("./src/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Đã kết nối thành công đến MongoDB!");

        // Khởi động server
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server đang chạy trên port ${PORT}`);
        });
    } catch (error) {
        console.log("Không thể kết nối đến MongoDB!", error);
        process.exit();
    }
}

startServer();