const { User } = require('../models');
const logger = require('../config/logger');


const createUser = async (userData) => {
    try {
        const user = await User.create(userData);
        logger.info(`User created: ${user}`);
        return user;
    }
    catch (err) {
        logger.error(`Err: ${err}`);
        throw new Error(err);
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        logger.info(`User : ${user}`);
        return user;
    }
    catch (err) {
        logger.error(`Err: ${err}`);
        throw new Error(err);
    }
}

const updateUser = async (id, userData) => {
    try {
        // const user = await User.update(userData, { where: { id } });
        const oldUser = await getUserById(id);
        if(!oldUser){
            throw new Error("User not found");
        }
        const updatedUser = oldUser.update(userData);
        logger.info(`User updated: ${updatedUser}`);
        return updatedUser;
    }
    catch (err) {
        logger.error(`Err: ${err}`);
        throw new Error(err);
    }
}

module.exports={
    createUser,
    getUserById,
    updateUser
}