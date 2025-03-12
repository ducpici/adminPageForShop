import connection from '../configs/database.js'

const getDetailOrderById = async (id) => {
    const [results, fields] = await connection.execute(`SELECT *, o.id as order_id, p.id as product_id, od.quantity as quantity_order
                                                        FROM orders o
                                                        JOIN customers c on c.id = o.customer_id
                                                        JOIN order_details od ON o.id = od.order_id
                                                        JOIN products p ON od.product_id = p.id
                                                        JOIN product_types pt on pt.id = p.product_type_id
                                                        JOIN brands b on b.id = p.brand_id 
                                                        WHERE o.id = ?`, [id])
    return results
}

module.exports = {
    getDetailOrderById
}