const User = require("../models/userModel");

class UserDao {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(userId) {
    return await User.findById(userId).where({ isDeleted: false });
  }

  async getUsers() {
    return await User.find({ isDeleted: false });
  }

  async updateUser(userId, updateData) {
    return await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).where({ isDeleted: false });
  }

  async deleteUser(userId) {
    return await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true }
    );
  }
}

module.exports = new UserDao();
