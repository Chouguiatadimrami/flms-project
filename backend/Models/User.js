const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["student", "faculty", "librarian", "admin"],
    default: "student",
  },
  department: String,
  phone: String,
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("User", userSchema);
