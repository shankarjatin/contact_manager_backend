const asyncHandler = require("express-async-handler")
const Contact = require("../model/contactModel");

const create_contact =asyncHandler(async(req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone} = req.body;
    if (!name || !email || !phone) {
    res.status (400);
    throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
    name,
    email,
    phone,
    });
    res.status (201).json(contact);
    })

//
const get_contacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status (200).json (contacts);
    });

const get_contact = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`get individual contact ${req.param.id}`})
})

const update_contact = asyncHandler( async (req,res)=>{
    res.status(200).json({message:`update individual contact ${req.param.id}`})
})
const delete_contact = asyncHandler( async(req,res)=>{
    res.status(200).json({message:`delete individual contact ${req.param.id}`})
})

module.exports ={create_contact , get_contacts ,get_contact , update_contact,delete_contact}