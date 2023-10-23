// Create web server
const express = require('express');
const app = express();
const port = 3000;
//Create a router object to handle routes
const router = express.Router();
//Get the comments data
const comments = require('./data/comments.json');
//Get the contacts data
const contacts = require('./data/contacts.json');
//Get the products data
const products = require('./data/products.