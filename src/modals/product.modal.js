import connection from '../configs/database'

const getAllProduct = async () => {
    const [results, fields] = await connection.execute('select * from products, product_types, brands where products.product_type_id = product_types.id and products.brand_id = brands.id')
    return results
}

module.exports = {
    getAllProduct
}