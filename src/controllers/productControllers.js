import {getAllProduct} from '../modals/product.modal'

const getProductsPage = async (req, res) => {
    const products = await getAllProduct()
    res.render('product.ejs', {data: products})
}

module.exports = {
    getProductsPage
}