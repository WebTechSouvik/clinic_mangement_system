
const showAppoinmentHome = async (req, res) => {
    res.render('appoinment_home');
}

const appoinmentDetalis = async (req, res) => {
    console.log("ji")
   res.render('appoinment_detalis')
}
module.exports = { showAppoinmentHome, appoinmentDetalis };