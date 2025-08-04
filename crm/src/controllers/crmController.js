import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

const Contact = mongoose.model("Contact", ContactSchema);

// this throws an error: throw new MongooseError('Model.prototype.save() no longer accepts a callback');
// export const addNewContact = (req, res) => {
// let newContact = new Contact(req.body);
//
// newContact.save((err, contact) => {
// if (err) {
// res.send(err);
// }
// res.json(contact);
// });
// };

export const addNewContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    next(err);
  }
};

//this throws an error: MongooseError: Model.find() no longer accepts a callback
// export const getContacts = (req, res) => {
//   Contact.find({}, (err, contact) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(contact);
//   });
// };

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    next(err);
  }
};

//this throws an error: MongooseError: Model.findById() no longer accepts a callback
// export const getContactWithID = (req, res) => {
//   Contact.findById(req.params.contactId, (err, contact) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(contact);
//   });
// };

export const getContactWithID = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (err) {
    next();
  }
};
