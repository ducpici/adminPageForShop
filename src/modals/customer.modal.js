import connection from '../configs/database.js'

const getAllCustomer = async () => {
    const [results, fields] = await connection.execute('select * from customers')
    return results
}

const getCustomerById = async (id) => {
    const [results, fields] = await connection.execute('select * from customers where id = ?', [id])
    return results    
}

const createCustomer = async (fullName,dateOfBirth,sex,address,email,phone,avt) => {
    const [results, fields] = await connection.execute('insert into customers (fullName, dateOfBirth,sex,address,email,phone,avtCustomer) values (?,?,?,?,?,?,?) ',[fullName,dateOfBirth,sex,address,email,phone,avt])
    return results
}

const deleteCustomer = async (id) => {
    const [results, fields] = await connection.execute('delete from customers where id = ?',[id])
    return results
}

module.exports = {
    getAllCustomer,createCustomer,
    getCustomerById,deleteCustomer
}