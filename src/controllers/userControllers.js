import {getAllUser,createUser,getAllRole,getUserById,updateUser,deleteUser} from '../modals/user.modal'

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
    const avatar = req.file ? req.file.filename : 'none';
    try {
        await createUser(fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar);
        // res.json({ success: true, message: "Thêm thành công!", redirect: "/users" });
        res.redirect('/users')
    } catch (error) {
        res.status(500).send("Lỗi khi tạo nhân viên: " + error.message);
    }
}

const postUpdateUser = async (req, res) => {
    const { fullName, dateOfBirth, sex, address, email, phone, user_role, username, password } = req.body;
    const avatar = req.file ? req.file.filename : req.body.avatar;
    const id = req.params.id
    try {
        await updateUser(fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar, id);
        res.json({ success: true, message: "Cập nhật thành công!", redirect: "/users" });
    } catch (error) {
        res.status(500).send("Lỗi khi sửa nhân viên: " + error.message);
    }
}

const postDeleteUser = async (req, res) => {
    const id = req.params.id
    await deleteUser(id)
    res.redirect('/users')
}

module.exports = {
    getUsersPage,getAddUserPage,postCreateUser,
    getEditUserPage,postDeleteUser,postUpdateUser
}