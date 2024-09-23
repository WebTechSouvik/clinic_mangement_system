const logger = require('../config/logger');

module.exports.sayHello = async (req, res) => {
    try {
        logger.info("Hello World!");
        res.send("Hello World!");
    } catch (err) {
        logger.error(`Err: ${err}`);
        res.status(500).json({ message: err.message });
    }
}