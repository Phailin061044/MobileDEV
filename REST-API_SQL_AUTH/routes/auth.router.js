const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-control-Allow-Header",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //Sing Up
  //http://localhost:5000/apis/auth/singup

app.post(
    "/apis/auth/signup", //path
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted], //middlewhere
    controller.signup
  ); //function

  //Sing In
  //http://localhost:5000/apis/auth/singin
  app.post(
    "/apis/auth/signin", //Path
    controller.signin //funtion
  );
};
