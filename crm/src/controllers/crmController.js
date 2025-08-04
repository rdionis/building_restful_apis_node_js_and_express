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
    const contactWithId = await Contact.findById(req.params.contactId);
    res.json(contactWithId);
  } catch (err) {
    next();
  }
};

// already doing the most updated way so I don't get an error
export const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    next(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    // remove() is deprecated
    await Contact.deleteOne({
      _id: req.params.contactId,
    });
    res.json({ message: "Successfully deleted contact." });
  } catch (err) {
    next(err);
  }
};
