
const showMedicineHome = async (req, res) => {
    res.render('medicine_home');
}

const viewMedicine = async (req, res) => {
    res.render('add_medicine');
}
module.exports = { showMedicineHome,viewMedicine };