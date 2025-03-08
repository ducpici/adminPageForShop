import connection from '../configs/database'

const getAllOrder = async () => {
    const [results, fields] = await connection.execute('select * from orders, customers where orders.customer_id = customers.id')
    return results
}

module.exports = {
    getAllOrder
}