const helpers = {};

helpers.isAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();

    }
    req.flash('error_msg', 'No estas autenticado');
    res.redirect('/useres/signin');
};

module.esports = helpers;