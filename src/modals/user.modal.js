import connection from '../configs/database.js'

const getAllUser = async () => {
    const [results, fields] = await connection.execute('select * from users, user_role where users.role_id = user_role.id')
    return results
}

module.exports = {
    getAllUser
}