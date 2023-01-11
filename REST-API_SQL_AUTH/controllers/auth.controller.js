const db = require("../models/index");
const config = require("../configs/auth.config");
const User = db.user; //User , Role อยู่ใน db
const Role = db.role;
const Op = db.Sequelize.Op; //op หรือตัวดำเนินการ se แปลงเป็นอ็อบเจค
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //bcryptjs ใช้สำหรับเข้ารหหัสและถอดรหัส
const { user } = require("../models/index");

exports.signup = (req, res) => {
  //Insert User to database
  User.create({
    //user ถูกประกาศให้ชื่อนี้แล้ว
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      //การรอ

      //กำหนดบทบาทตอนสมัครสมาชิก
      if (req.body.role) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully" });
          });
        });
      }
      //ไม่ได้กำหนด roles
      else {
        //User roles = 1 หมายเลข 1 คือ User
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  //Select * From user where username = req.body.username
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not Found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      ); //การเปรียบเทียบ
      if (!passwordIsValid) {
        //ถ้า เจอ ! แปลว่า pass ไม่ถูก
        return res
          .status(401)
          .send({ accessToken: null, message: "Invalid Password " });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, //24ชม. 24x60x60
      });

      let authorities = []; //สิทธิ์ในการเข้าถึง Roles
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username:user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
