const { User } = require('../db/models');


const loginUser = (req, res, user) => {
    req.session.auth = {
        
    }
}


module.exports = { loginUser, logoutUser, requireAuth, restoreUser };
