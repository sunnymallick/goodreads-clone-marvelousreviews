const { User } = require('./db/models');


const loginUser = (req, res, user) => {
    req.session.auth = {
        email: user.email,
        userId: user.id
    }
}

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/user/login')
    }
    return next();
};

const restoreUser = async (req, res, next) => {
    console.log(req.session);

    if (req.session.auth) {
        // check how to use User here
        // ??
        const { userId } = req.session.auth;

        try {
            const user = await User.findByPk(userId);

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};


module.exports = { loginUser, logoutUser, requireAuth, restoreUser };
