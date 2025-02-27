import multer from "multer";
import path from "path";

const newPath = path.dirname(__dirname) + '\\public\\images\\avtCustomers\\'

// Cấu hình Multer để lưu ảnh vào thư mục "uploads"
const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, newPath); // Lưu file vào thư mục uploads/
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Đổi tên file tránh trùng lặp
    }
});
console.log(newPath)
const upload = multer({ storage: storage });

export default upload;