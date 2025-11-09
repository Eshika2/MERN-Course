import express from 'express';
import { addItems, allItems, getGoodItems, itemSearch } from '../controllers/itemController.js';

const itemRouter = express.Router();

itemRouter.post("/", addItems);
itemRouter.get("/", allItems);
// itemRouter.get("/search", itemSearch);
itemRouter.get("/:name", itemSearch);


itemRouter.get("/good", getGoodItems);

export default itemRouter