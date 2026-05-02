const Resource = require("../models/Resource");
exports.getAll = async (req, res) => {
  const { search } = req.query;

  let filter = {};
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  const data = await Resource.find(filter);
  res.json(data);
};

exports.create = async (req, res) => {
  const r = await Resource.create(req.body);
  res.json(r);
};

exports.delete = async (req, res) => {
  const r = await Resource.findById(req.params.id);

  if (r.available_copies < 1)
    return res.status(400).json({ msg: "Has active loans" });

  await r.deleteOne();
  res.json({ msg: "Deleted" });
};
