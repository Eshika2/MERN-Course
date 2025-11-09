import Item from "../models/item.js";

export function addItems(req, res) {
    const item = new Item(req.body);

    item.save().then(
        ()=>{
            res.json({
                message: "Items Added Successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Items Added Failed"
            })
        }
    )
}

export function allItems(req, res) {
    Item.find().then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error Occured"
            })
        }
    )
}

export function getGoodItems(req, res) {
    res.json({
        message: "Good Items"
    })
}

export function itemSearch(req, res) {
    // const itemName = req.body.name;

    //get name from url
    const itemName = req.params.name;

    Item.find(
        {
            name : itemName
        }
    ).then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error Occured"
            })
        }
    )
}