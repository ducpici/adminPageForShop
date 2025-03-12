import connection from '../configs/database.js'

const getAllCustomer = async () => {
    const [results, fields] = await connection.execute('select * from customers')
    return results
}

const getCustomerById = async (id) => {
    const [results, fields] = await connection.execute('select * from customers where id = ?', [id])
    return results    
}

const getCustomerByName = async (name) => {
    const [results, fields] = await connection.execute('select * from customers where fullName like ?', [`%${name}%`] )
    return results    
}

const createCustomer = async (fullName,dateOfBirth,sex,address,email,phone) => {
    const [results, fields] = await connection.execute('insert into customers (fullName, dateOfBirth,sex,address,email,phone) values (?,?,?,?,?,?)',[fullName,dateOfBirth,sex,address,email,phone])
    return results
}

const updateCustomer = async (fullName,dateOfBirth,sex,address,email,phone,id) => {
    const [results, fields] = await connection.execute('update customers set fullName=?, dateOfBirth=?, sex=?, address=?, email=?, phone=? where id=?',[fullName,dateOfBirth,sex,address,email,phone,id])
    return results
}

const deleteCustomer = async (id) => {
    const [results, fields] = await connection.execute('delete from customers where id = ?',[id])
    return results
}

module.exports = {
    getAllCustomer,createCustomer,updateCustomer,
    getCustomerById,deleteCustomer,getCustomerByName
}