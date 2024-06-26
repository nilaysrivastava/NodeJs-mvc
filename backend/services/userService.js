const userDao = require("../dao/userDao");

class UserService {
  async createUser(userData) {
    return await userDao.createUser(userData);
  }

  async getUserById(userId) {
    return await userDao.getUserById(userId);
  }

  async getUsers() {
    return await userDao.getUsers();
  }

  async updateUser(userId, updateData) {
    return await userDao.updateUser(userId, updateData);
  }

  async deleteUser(userId) {
    return await userDao.deleteUser(userId);
  }
}

module.exports = new UserService();
