const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const UserRouter = require("./routes/UserRouter");

//middleware
app.use(express.json());
app.use("/api", UserRouter);

//4 create the schema
const User = require("./models/User");

//3 set up the env variables
require("dotenv").config({ path: "./config/.env" });

//2 connect the database
connectDB();

/*******************************create the CRUD *********************************/
//1 POST A NEW User
// app.post("/api/add_User", async (req, res) => {
// console.log(req.body)
// res.send('hello')
//   const { name, lastName, email, phone } = req.body;
//   try {
//     const newUser = new User({ name, lastName, email, phone });
//     await newUser.save();
//     res.send(newUser);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.get("/api/Users", async (req, res) => {
//   try {
//     const Users = await User.find();
//     res.send(Users);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.get("/api/Users/:id", async (req, res) => {
//   const UserID = req.params.id;
//   try {
//     const User = await User.findById(UserID);
//     res.send(User);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.delete("/api/Users/:id", async (req, res) => {
//   const UserID = req.params.id;
//   try {
//     const UserRemoved = await User.findByIdAndDelete(UserID);
//     res.send(UserRemoved);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.put("/api/Users/:id", async (req, res) => {
//   const UserID = req.params.id;
//   try {
//     const UserUpdated = await User.findByIdAndUpdate(
//       UserID,
//       { ...req.body },
//       { new: true }
//     );
//     res.status(201).json(UserUpdated);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

//1 CREATE THE SERVER
const PORT = 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(error)
    : console.log(`the server is running on port ${PORT}`)
);
