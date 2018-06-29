const usersOnFile = require('../users.json');
const authController = {};

authController.verifyUser = (req, res, next) => {
  res.locals.verified = false;
  for (let i=0; i<usersOnFile.length; i++) {
    if (req.body.username === usersOnFile[i].username && req.body.password === usersOnFile[i].password) {
      res.locals.verified = false;
      next();
    }
  }
  res.redirect('/login.html');
}

authController.setCookie = (req, res, next) => {
  const option = {
    maxAge: 60000000,
  };
  res.cookie('login', 'true', option);
  next();
}


authController.checkCookie = (req, res, next) => {
  if (res.locals.verified || req.cookies.login === 'true') next();
  else res.redirect('/login.html');
}



module.exports = authController;
