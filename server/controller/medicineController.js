
const showMedicineHome = async (req, res) => {
    res.render('medicine_home');
}

const viewMedicineByAppoinment = async (req, res) => {
    res.render('add_medicine');
}
module.exports = { showMedicineHome,viewMedicineByAppoinment };