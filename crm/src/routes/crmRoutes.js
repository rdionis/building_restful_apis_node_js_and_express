import { get } from "mongoose";
import {
  addNewContact,
  getContacts,
  getContactWithID,
} from "../controllers/crmController.js";

const routes = app => {
  app
    .route("/contact")

    // get all contacts
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      getContacts

      // (req, res, next) => {
      //   res.send("GET request sucessful!");
      // }
    )
    // post a new contact
    .post(addNewContact);

  //.post((req, res) => res.send("POST request sucessful!"));

  app
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactWithID)
    .put((req, res) => res.send("PUT request sucessful!"))

    .delete((req, res) => res.send("DELETE request sucessful!"));
};

export default routes;
