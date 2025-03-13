import connection from '../configs/database'

const getAllOrder = async () => {
    const [results, fields] = await connection.execute('select *, orders.id as order_id, customers.fullName as customerName, users.fullName as userName from orders, customers, users where orders.customer_id = customers.id and orders.user_id = users.id')
    return results
}

const createOrder = async (customer_id, date, payment, total, status, user_id) => {
    const [results, fields] = await connection.execute('insert into orders (customer_id, date, payment, total, status, user_id) values (?,?,?,?,?,?)', [customer_id, date, payment, total, status, user_id])
    return results
}

const insertOrderDetail = async (order_id, product_id, quantity) => {
    const [results, fields] = await connection.execute('insert into order_details (order_id, product_id, quantity) values (?,?,?)', [order_id, product_id, quantity])
    return results
}

const updateStatus = async (idStatus, order_id) => {
    const [results, fields] = await connection.execute('update orders set status = ? where id = ?', [idStatus, order_id])
    return results
}

module.exports = {
    getAllOrder,createOrder,insertOrderDetail,updateStatus
}