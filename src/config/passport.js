const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done)=>{
//confimar si existe el correo del ususario
    const user = await User.findOne({email})
    if (!user){
        return done (nullm, false, { message: 'No se encontro usuario'});
    } else{
        //validar la contraseña
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        }else{
            return donde(null, false, { message: 'Contraseña incorrecta'})
        }
    }

}));

passport.serializeUser((user, done)=>{
    done(null, user.id);
});
passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err, user);
    });
});