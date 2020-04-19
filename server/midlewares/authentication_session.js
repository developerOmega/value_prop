/* ----------------------- */
/* Verificar sesion */
/* ----------------------- */

let authSession = (req, res, next) => {
    
    if(!req.session.user){
        return res.redirect('/login');
    }

    next();
}

let excludeSession = (req, res, next) => {
    
    if(req.session.user){
        res.redirect('/');
    }

    next();

}

let adminSession = (req, res, next) => {
    if(req.session.user.type != 'ADMIN_TYPE' ){
        return res.redirect('back');
    }

    next();
}

module.exports = {
    authSession,
    excludeSession,
    adminSession
};