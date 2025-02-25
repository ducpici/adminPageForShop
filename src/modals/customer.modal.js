import connection from '../configs/database.js'

const getAllCustomer = async () => {
    const [results, fields] = await connection.execute('select * from Customers')
    return results
}

module.exports = {
    getAllCustomer
}