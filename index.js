const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const HUBSPOT_PRIVATE_APP_ACCESS = process.env.HUBSPOT_PRIVATE_APP_ACCESS;
const OBJECT_TYPE_ID = process.env.OBJECT_TYPE_ID;

const headers = {
  Authorization: `Bearer ${HUBSPOT_PRIVATE_APP_ACCESS}`,
  "Content-Type": "application/json",
};


// * Code for Route 1 goes here

// TODO: ROUTE 2 - Create a new app.get route for the form to create or update new custom object data. Send this data along in the next route.

app.get("/update-cobj", (req, res) => {
    res.render("updates", {
      title: "Update Custom Object Form | Integrating With HubSpot I Practicum",
    });
  });

// TODO: ROUTE 3 - Create a new app.post route for the custom objects form to create or update your custom object data. Once executed, redirect the user to the homepage.


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));