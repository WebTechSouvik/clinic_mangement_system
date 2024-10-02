
const showTestHome = async (req, res) => {
    res.render('test_home');
}

const viewTestByAppoinment = async (req, res) => {
    
    res.render('add_test');
}

const viewTestReport = async (req, res) => {

    res.render('all_report');
}
module.exports = { showTestHome,viewTestByAppoinment,viewTestReport };