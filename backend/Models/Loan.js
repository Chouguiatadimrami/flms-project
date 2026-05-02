const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  resource: { type: mongoose.Schema.Types.ObjectId, ref: "Resource" },
  due_date: Date,
  return_date: Date,
  renew_count: { type: Number, default: 0 },
});

module.exports = mongoose.model("Loan", loanSchema);
