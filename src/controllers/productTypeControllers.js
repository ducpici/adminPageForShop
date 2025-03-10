import {getAllProductType,getProductTypeById,createProductType,updateProductType,deleteProductType} from '../modals/productType.modal'

const getProductTypesPage = async (req, res) => {
    const product_types = await getAllProductType()
    res.render('productType.ejs', {data: product_types, user_session: req.session.user})
}

const getAddProductTypePage = async (req, res) => {
    res.render('addProductType.ejs',{user_session: req.session.user})
}

const postCreateProductType = async (req, res) => {
    const {product_type_name} = req.body
    await createProductType(product_type_name)
    res.redirect('/product_types')
}

const getEditProductTypePage = async (req, res) => {
    const id = req.params.id
    const result = await getProductTypeById(id)
    res.render('editProductType.ejs', {product_type: result[0], user_session: req.session.user})
}

const postUpdateProductType = async (req, res) => {
    const id = req.params.id
    const {product_type_name} = req.body
    await updateProductType(product_type_name,id)
    res.redirect('/product_types')
}

const postDeleteProductType = async (req, res) => {
    const id = req.params.id
    await deleteProductType(id)
    res.redirect('/product_types')
}

module.exports = {
    getProductTypesPage,getAddProductTypePage,postCreateProductType,getEditProductTypePage,postUpdateProductType,postDeleteProductType
}