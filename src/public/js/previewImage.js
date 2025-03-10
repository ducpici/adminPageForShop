function imagePreview(){
    document.getElementById("imgInput").addEventListener("change", function(event) {
        const file = event.target.files[0]; // Lấy file được chọn
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("imgPreview").src = e.target.result; // Gán ảnh preview
            };
            reader.readAsDataURL(file); // Đọc file ảnh
        }
    });
}

imagePreview()