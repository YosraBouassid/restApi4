const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(201).json(Users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const addUser = async (req, res) => {
  const { name, lastName, email, phone } = req.body;
  try {
    const newUser = new User({ name, lastName, email, phone });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  const UserID = req.params.id;
  try {
    const UserRemoved = await User.findByIdAndDelete(UserID);
    res.status(201).json(UserRemoved);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  const UserID = req.params.id;
  try {
    const UserUpdated = await User.findByIdAndUpdate(
      UserID,
      { ...req.body },
      { new: true }
    );
    res.status(201).json(UserUpdated);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getUsers, addUser, deleteUser, updateUser };
