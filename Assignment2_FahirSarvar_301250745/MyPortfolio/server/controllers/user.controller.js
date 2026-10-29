import User from "../models/user.model.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json({ message: "Successfully signed up!" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    res.json(await User.find().select("name email updated created"));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(400).json({ error: "User not found" });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve user" });
  }
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const update = async (req, res) => {
  try {
    const user = extend(req.profile, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deletedUser = await req.profile.deleteOne();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.json({ message: "All users removed", deletedCount: result.deletedCount });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { create, userByID, read, list, remove, removeAll, update };
