import {getAllBrand,getBrandById,createBrand,updateBrand,deleteBrand} from '../modals/brand.modal'

const getBrandsPage = async (req, res) => {
    const brands = await getAllBrand()
    res.render('brand.ejs', {data: brands, user_session: req.session.user})
}

const getAddBrandPage = (req, res) => {
    res.render('addBrand.ejs', {user_session: req.session.user})
}

const getEditBrandPage = async (req, res) => {
    const id = req.params.id
    const result = await getBrandById(id)
    res.render('editBrand.ejs', {brand: result[0], user_session: req.session.user})
}

const postCreateBrand = async (req, res) => {
    const {brand_name} = req.body
    await createBrand(brand_name)
    res.redirect('/brands')
}

const postUpdateBrand = async (req, res) => {
    const id = req.params.id
    const {brand_name} = req.body
    await updateBrand(brand_name,id)
    res.redirect('/brands')
}

const postDeleteBrand = async (req, res) => {
    const id = req.params.id
    await deleteBrand(id)
    res.redirect('/brands')
}

module.exports = {
    getBrandsPage, getAddBrandPage,
    getEditBrandPage, postCreateBrand,
    postUpdateBrand,postDeleteBrand
}