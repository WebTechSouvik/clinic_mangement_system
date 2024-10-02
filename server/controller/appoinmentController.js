
const showAppoinmentHome = async (req, res) => {
    res.render('appoinment_home');
}

const addAppoinment = async (req, res) => {
    res.redirect('/appoinmnet/')
}
module.exports = { showAppoinmentHome, addAppoinment };