const LocalStrategy = require('passport-local').Strategy;
const Password = require('./password');
const Users = require('../repositories/Users');

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await Users.findByEmail(email);

    if (user == null) {
      return done(null, false, { message: 'No user with that email' });
    }

    try {
      if (await Password.match(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (error) {
      return done(error);
    }
  }

  passport.use(new LocalStrategy({
    usernameField: 'email',
    password: 'password'
  }, authenticateUser))

  // Store User ID inside of session
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })

  // Find user by ID stored in session
  passport.deserializeUser(async (id, done) =>  {
    return done(null, await Users.findById(id))
  })

}

module.exports = initialize;