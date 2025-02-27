import multer from "multer";
import path from "path";

// Cấu hình Multer để lưu ảnh vào thư mục "uploads"
const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/avtCustomers")); // Lưu file vào thư mục 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Đổi tên file
    }
});

const upload = multer({ storage: storage });

export default upload;