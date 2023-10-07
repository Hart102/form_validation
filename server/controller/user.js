const bcrypt = require("bcrypt");
const saltRounds = 10;
const { connection } = require("../DbConnection");

// Register endpoint
const register = (req, res) => {
  try {
    const { name, email, password, gender } = req.body;

    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (!err) {
          const sql =
            "INSERT INTO `users`(`name`, `email`, `password`, `gender`) VALUES (?, ?, ?, ?)";
          connection.query(
            sql,
            [name, email, hash, gender],
            (err, response) => {
              if (err) return console.log(err);
              if (response.affectedRows) return res.json({ success: true });
            }
          );
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

//Login endpoint
const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    const sql = `SELECT * FROM users WHERE name="${name}" OR email="${name}"`;

    connection.query(sql, (err, response) => {
      if (err) return res.json({ error: "something went wrong" });
      if (!response) return res.json({ error: "User not found!" });
      response.map((user) => {
        bcrypt.compare(password, user.password).then((result) => {
          if (result) return res.json({ success: result });
          return res.json({ error: "User not found!" });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
