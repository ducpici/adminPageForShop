import connection from '../configs/database.js'

const getAllUser = async () => {
    const [results, fields] = await connection.execute('SELECT *, users.id as user_id FROM users INNER JOIN user_role ON users.role_id = user_role.id;')
    return results
}

const getAllRole = async () => {
    const [results, fields] = await connection.execute('SELECT * FROM user_role')
    return results
}

const getUserById = async (id) => {
    const [results, fields] = await connection.execute('select * from users where id = ?', [id])
    return results    
}

const checkAccount = async (username,password) => {
    const [results, fields] = await connection.execute('select *, users.id as user_id from users, user_role where users.role_id = user_role.id and username = ? and password = ?', [username, password])
    return results
}

const createUser = async (fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar) => {
    const [results, fields] = await connection.execute('insert into users (fullName, dateOfBirth, sex, address, email, phone, avtUser, role_id, username, password) values (?,?,?,?,?,?,?,?,?,?)',[fullName, dateOfBirth, sex, address, email, phone, avatar, user_role, username, password])
    return results
}

const updateUser = async (fullName, dateOfBirth, sex, address, email, phone, user_role, username, password, avatar, id) => {
    const [results, fields] = await connection.execute('update users set fullName=?, dateOfBirth=?, sex=?, address=?, email=?, phone=?, avtUser=?, role_id=?, username=?, password=? where id=?',[fullName, dateOfBirth, sex, address, email, phone, avatar, user_role, username, password, id])
    return results
}

const deleteUser = async (id) => {
    const [results, fields] = await connection.execute('DELETE FROM users where id =?', [id])
    return results
}

module.exports = {
    getAllUser,checkAccount,createUser,getAllRole,getUserById,updateUser,deleteUser
}