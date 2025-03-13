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

    document.getElementById("updateForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = new FormData();
        const fileInput = document.getElementById("imgInput");
        const input = document.forms["updateForm"];
        
        if (fileInput.files.length > 0) {
            formData.append("avatar", fileInput.files[0]); // Nếu có ảnh mới, gửi ảnh mới
        } else {
            formData.append("avatar", document.getElementById("oldImage").value); // Không chọn ảnh => giữ ảnh cũ
        }
    
        // Gửi formData lên server
        const user_id = document.getElementById('userId')
        formData.append("fullName", input["fullName"].value);
        formData.append("dateOfBirth", input["dateOfBirth"].value);
        formData.append("sex", input["sex"].value);
        formData.append("address", input["address"].value);
        formData.append("email", input["email"].value);
        formData.append("phone", input["phone"].value);
        formData.append("user_role", input["user_role"].value);
        formData.append("username", input["username"].value);
        formData.append("password", input["password"].value);

        formData.append("id", user_id.value)
        fetch(`/update-user/${user_id.value}`, {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                alert("Cập nhật thành công!")
                window.location.href = data.redirect;
            }else {
                alert("Lỗi: " + data.error);
            }
        })
        .catch(error => console.error("Lỗi:", error));
    });
}

imagePreview()