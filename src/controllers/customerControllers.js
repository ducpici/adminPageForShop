import {createCustomer,getCustomerById,deleteCustomer} from '../modals/customer.modal'
// import upload from '../configs/multerConfig'


const getAddCustomerPage = (req, res) => {
    res.render('addCustomer.ejs')
}

const getEditCustomerPage = async (req, res) => {
    const id = req.params.id
    const result = await getCustomerById(id)
    res.render('editCustomer.ejs', {customer: result[0]})
}

export const postCreateCustomer = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone } = req.body;
    const avatar = req.file ? req.file.filename : null;

    console.log("✅ Dữ liệu gửi vào DB:", { fullName, dateOfBirth, sex, address, email, phone, avatar });

    try {
        await createCustomer(fullName, dateOfBirth, sex, address, email, phone, avatar);
        res.redirect("/customers");
    } catch (error) {
        res.status(500).send("Lỗi khi tạo khách hàng: " + error.message);
    }
};

const postDeleteCustomer = async (req, res) => {
    const id = req.params.id
    await deleteCustomer(id)
    res.redirect('/customers')
}

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/src/public/images/avtCustomers/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Đổi tên file để tránh trùng
//     }
//   })

module.exports = {
    getAddCustomerPage,postCreateCustomer,
    getEditCustomerPage,postDeleteCustomer
}
