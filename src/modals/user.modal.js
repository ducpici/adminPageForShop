import connection from '../configs/database.js'

const getAllUser = async () => {
    const [results, fields] = await connection.execute('select * from users, user_role where users.role_id = user_role.id')
    return results
}

const checkAccount = async (username,password) => {
    const [results, fields] = await connection.execute('select * from users, user_role where users.role_id = user_role.id and username = ? and password = ?', [username, password])
    return results
}

module.exports = {
    getAllUser,checkAccount
}