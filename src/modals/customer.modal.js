import connection from '../configs/database.js'

const getAllCustomer = async () => {
    const [results, fields] = await connection.execute('select * from Customers')
    return results
}

const getCustomerById = async (id) => {
    const [results, fields] = await connection.execute('select * from Customers where id = ?', [id])
    return results    
}

const createCustomer = async (fullName,dateOfBirth,sex,address,email,phone) => {
    const [results, fields] = await connection.execute('insert into Customers (fullName, dateOfBirth,sex,address,email,phone,avtCustomer) values (?,?,?,?,?,?,?) ',[fullName,dateOfBirth,sex,address,email,phone,''])
    return results
}

module.exports = {
    getAllCustomer,createCustomer,
    getCustomerById
}