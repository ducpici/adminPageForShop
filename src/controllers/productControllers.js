import {getAllProduct,getProductById,createProduct,updateProduct,deleteProduct} from '../modals/product.modal'
import {getAllBrand} from '../modals/brand.modal'
import {getAllProductType} from '../modals/productType.modal'

const getProductsPage = async (req, res) => {
    const products = await getAllProduct()
    res.render('product.ejs', {data: products, user_session: req.session.user})
}

const getAddProductPage = async (req, res) => {
    const brands = await getAllBrand()
    const types = await getAllProductType()
    res.render('addProduct.ejs', {user_session: req.session.user, brands: brands, types: types})
}

const getEditProductPage = async (req, res) => {
    const id = req.params.id
    const product = await getProductById(id)
    const brands = await getAllBrand()
    const types = await getAllProductType()
    res.render('editProduct.ejs', {product: product[0], brands: brands, types: types, user_session: req.session.user})
}

const postCreateProduct = async (req, res) => {
    const { productName, type, brand, description, price, quantity } = req.body;

    try {
        await createProduct(productName, type, brand, description, price, quantity);
        res.redirect("/products");
    } catch (error) {
        res.status(500).send("Lỗi khi tạo sản phẩm: " + error.message);
    }
}

const postUpdateProduct = async (req, res) => {
    const { productName, type, brand, description, price, quantity } = req.body;
    const id = req.params.id
    try {
        await updateProduct(productName, type, brand, description, price, quantity, id);
        res.redirect("/products");
    } catch (error) {
        res.status(500).send("Lỗi khi sửa sản phẩm: " + error.message);
    }
}

const postDeleteProduct = async (req, res) => {
    const id = req.params.id
    await deleteProduct(id)
}

module.exports = {
    getProductsPage,getAddProductPage,postCreateProduct,
    getEditProductPage,postUpdateProduct,postDeleteProduct
}