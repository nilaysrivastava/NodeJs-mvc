const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate } = require("../middlewares/authMiddleware");
const { validateUser } = require("../middlewares/validationMiddleware");

router.get("/worko/user", authenticate, userController.getUsers);
router.get("/worko/user/:userId", authenticate, userController.getUserById);
router.post(
  "/worko/user",
  authenticate,
  validateUser,
  userController.createUser
);
router.put(
  "/worko/user/:userId",
  authenticate,
  validateUser,
  userController.updateUser
);
router.patch(
  "/worko/user/:userId",
  authenticate,
  validateUser,
  userController.updateUser
);
router.delete("/worko/user/:userId", authenticate, userController.deleteUser);

module.exports = router;
