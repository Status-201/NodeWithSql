const express = require("express");
const app = express();
const userRouter = require("./api/userRouter");

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/api", (req, res) => {
  res.json({
    msg: "bye",
  });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
