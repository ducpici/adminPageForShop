import express from 'express'
import {loggedin} from '../middlewares/auth.middleware'
import {postCreateOrder,postUpdateStatus} from '../controllers/orderControllers'
import {getCustomers} from '../api/getCustomers'
import connection from '../configs/database'
const api_router = express.Router()

api_router.post('/api/save-invoice', loggedin, postCreateOrder)

api_router.post('/api/customers', loggedin, getCustomers)

api_router.post('/api/update-order', loggedin, postUpdateStatus)

api_router.get('/api/statistics', loggedin, async (req, res) => {
    const { day, month, year } = req.query;
    let queryParams = [year];
    // Truy vấn SQL gốc
    let query = `
        SELECT	
            YEAR(o.date) AS year, 
            MONTH(o.date) AS month, 
            p.product_name, 
            SUM(od.quantity) AS total_quantity_sold, 
            SUM(od.quantity * p.price) AS total_revenue
        FROM orders o
        JOIN order_details od ON o.id = od.order_id
        JOIN products p ON od.product_id = p.id
        WHERE YEAR(o.date) = ?
    `;

    if (month) {
        query += " AND MONTH(o.date) = ?";
        queryParams.push(month);
    }

    if (day) {
        query += " AND DAY(o.date) = ?";
        queryParams.push(day);
    }

    query += " GROUP BY YEAR(o.date), MONTH(o.date), p.product_name";
    query += " ORDER BY year DESC, month DESC, total_revenue DESC";

    try {
        const [results] = await connection.execute(query, queryParams);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Lỗi truy vấn!", error });
    }
})
export default api_router