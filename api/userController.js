const { create } = require("./userService");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).jon({
          message: "Something went wrong",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
};
