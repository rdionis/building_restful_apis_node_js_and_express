import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: "string",
    required: "Enter a first name.",
  },
  lastName: {
    type: "string",

    required: "Enter a lastname.",
  },
  email: {
    type: "string",
  },
  company: {
    type: "string",
  },
  phone: {
    type: "number",
  },
  createdDate: {
    type: "Date",
    default: Date.now,
  },
});
