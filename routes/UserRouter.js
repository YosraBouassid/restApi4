const express = require("express");
const router = express.Router();
const { getUsers, addUser, deleteUser, updateUser } = require("../controllers/UserController");

router.get("/Users", getUsers);
router.post("/add_User", addUser);
router.delete('/Users/:id',deleteUser)
router.put('/Users/:id',updateUser)

module.exports = router;
