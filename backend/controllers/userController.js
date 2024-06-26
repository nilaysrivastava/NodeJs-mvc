const userService = require("../services/userService");
const { userDto } = require("../dtos/userDto");

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      res.status(201).json(userDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const userId = req.params.userId;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(userDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.json(users.map(userDto));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const userId = req.params.userId;
      const updateData = req.body;
      const user = await userService.updateUser(userId, updateData);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(userDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const userId = req.params.userId;
      const user = await userService.deleteUser(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(userDto(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
