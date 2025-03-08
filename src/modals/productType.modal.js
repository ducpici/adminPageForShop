import connection from '../configs/database.js'

const getAllProductType = async () => {
    const [results, fields] = await connection.execute('select * from product_types')
    return results
}

const getProductTypeById = async (id) => {
    const [results, fields] = await connection.execute('select * from product_types where id = ?', [id])
    return results    
}

const createProductType = async (product_type_name) => {
    const [results, fields] = await connection.execute('insert into product_types (product_type_name) value (?)', [product_type_name])
    return results  
}

const updateProductType = async (product_type_name, id) => {
    const [results, fields] = await connection.execute('update product_types set product_type_name = ? where id = ?', [product_type_name, id])
    return results 
}

const deleteProductType = async (id) => {
    const [results, fields] = await connection.execute('delete from product_types where id = ?', [id])
    return results 
}

module.exports = {
    getAllProductType,getProductTypeById,
    createProductType,updateProductType,
    deleteProductType
}