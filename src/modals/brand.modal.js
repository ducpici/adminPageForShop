import connection from '../configs/database.js'

const getAllBrand = async () => {
    const [results, fields] = await connection.execute('select * from brands')
    return results
}

const getBrandById = async (id) => {
    const [results, fields] = await connection.execute('select * from brands where id = ?', [id])
    return results    
}

const createBrand = async (brand_name) => {
    const [results, fields] = await connection.execute('insert into brands (brand_name) value (?)', [brand_name])
    return results   
}

const updateBrand = async (brand_name, id) => {
    const [results, fields] = await connection.execute('update brands set brand_name = ? where id = ?', [brand_name, id])
    return results 
}

const deleteBrand = async (id) => {
    const [results, fields] = await connection.execute('delete from brands where id = ?', [id])
    return results 
}
module.exports = {
    getAllBrand,getBrandById,
    createBrand,updateBrand,
    deleteBrand
}