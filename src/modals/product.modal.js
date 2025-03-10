import connection from '../configs/database'

const getAllProduct = async () => {
    const [results, fields] = await connection.execute('select *,products.id as product_id from products, product_types, brands where products.product_type_id = product_types.id and products.brand_id = brands.id')
    return results
}

const getProductById = async (id) => {
    const [results, fields] = await connection.execute('select * from products where id = ?', [id])
    return results 
}

const createProduct = async (productName, type, brand, description, price, quantity) => {
    const [results, fields] = await connection.execute('insert into products (product_name, product_type_id, brand_id, description, price, quantity) values (?,?,?,?,?,?)', [productName, type, brand, description, price, quantity])
    return results
}


const updateProduct = async (productName, type, brand, description, price, quantity, id) => {
    const [results, fields] = await connection.execute('update products set product_name=?, product_type_id=?, brand_id=?, description=?, price=?, quantity=? where id=?', [productName, type, brand, description, price, quantity, id])
    return results
}

const deleteProduct = async (id) => {
    const [results, fields] = await connection.execute('delete from products where id=?', [id])
    return results
}
module.exports = {
    getAllProduct,getProductById,createProduct,updateProduct,deleteProduct
}