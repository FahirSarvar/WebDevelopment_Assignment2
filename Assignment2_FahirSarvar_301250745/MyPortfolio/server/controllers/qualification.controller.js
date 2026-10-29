import Qualification from "../models/qualification.model.js";
import extend from "lodash/extend.js";

const create = async (req, res) => {
  try {
    const item = new Qualification(req.body);
    await item.save();
    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const list = async (req, res) => {
  try {
    const items = await Qualification.find();
    res.json(items);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const itemByID = async (req, res, next, id) => {
  try {
    const item = await Qualification.findById(id);
    if (!item) return res.status(404).json({ error: "qualification not found" });
    req.item = item;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve qualification" });
  }
};

const read = (req, res) => {
  return res.json(req.item);
};

const update = async (req, res) => {
  try {
    let item = extend(req.item, req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await req.item.deleteOne();
    res.json(req.item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: "All qualifications removed" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { create, list, itemByID, read, update, remove, removeAll };
