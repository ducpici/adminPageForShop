import {getAllUser,createUser,getAllRole,getUserById,updateUser} from '../modals/user.modal'

const getUsersPage = async (req, res) => {
    const users = await getAllUser()
    res.render('user.ejs', {data: users, user_session: req.session.user})
}

const getAddUserPage = async (req, res) => {
    const roles = await getAllRole()
    res.render('addUser.ejs', {data: roles, user_session: req.session.user})
}

const getEditUserPage = async (req, res) => {
    const id = req.params.id
    const result = await getUserById(id)
    const roles = await getAllRole()
    res.render('editUser.ejs', {user: result[0], data: roles, user_session: req.session.user})
}

const postCreateUser = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone, user_role, username, password } = req.body;
    const avatar = req.file ? req.file.filename : null;

    console.log("✅ Dữ liệu gửi vào DB:", { fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar });

    try {
        await createUser(fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar);
        res.redirect("/users");
    } catch (error) {
        res.status(500).send("Lỗi khi tạo nhân viên: " + error.message);
    }
}

const postUpdateUser = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone, user_role, username, password } = req.body;
    const avatar = req.file ? req.file.filename : null;
    const id = req.params.id

    console.log('body: ',req.body)
    console.log('param: ',req.params)
    console.log('avt: ',req.file.filename)


    try {
        await updateUser(fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar, id);
        res.redirect("/users");
    } catch (error) {
        res.status(500).send("Lỗi khi sửa nhân viên: " + error.message);
    }
}

const postDeleteUser = (req, res) => {

}

module.exports = {
    getUsersPage,getAddUserPage,postCreateUser,
    getEditUserPage,postDeleteUser,postUpdateUser
}