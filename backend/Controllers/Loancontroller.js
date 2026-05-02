const Loan = require("../models/Loan");
const Resource = require("../models/Resource");

exports.borrow = async (req, res) => {
  const userId = req.user.id;
  const { resourceId } = req.body;

  const resource = await Resource.findById(resourceId);

  if (!resource || resource.available_copies <= 0)
    return res.status(400).json({ msg: "Not available" });

  // تحقق من الإعارات الحالية
  const activeLoans = await Loan.countDocuments({
    user: userId,
    return_date: null,
  });

  const limit = req.user.role === "faculty" ? 10 : 5;

  if (activeLoans >= limit)
    return res.status(400).json({ msg: "Quota exceeded" });

  // تحديث
  resource.available_copies -= 1;
  await resource.save();

  const days = req.user.role === "faculty" ? 30 : 14;

  const due = new Date();
  due.setDate(due.getDate() + days);

  const loan = await Loan.create({
    user: userId,
    resource: resourceId,
    due_date: due,
  });

  res.json(loan);
};
