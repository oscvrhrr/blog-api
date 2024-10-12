const passport = require("passport");
const LocalStrategy = require("passport-local");


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
      const user = rows[0];
  
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
        return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);


