import {getCustomerByName} from '../modals/customer.modal'

const getCustomers = async (req, res) => {
    const stringName = req.body.name
    try{
        const customers = await getCustomerByName(stringName)
        res.status(200).json({success: true, customers: customers})
    }
    catch(error){
        res.status(500).json({success: false, message: 'Thất bại'})
    }
}

module.exports = {
    getCustomers
}