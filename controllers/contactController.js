const asyncHandler = require("express-async-handler")

const create_contact =asyncHandler(async(req, res) => {
    console.log("The request body is :", req.body); I
    const { name, email, phone} = req.body;
    if (!name || !email || !phone) {
    res.status (400);
    throw new Error("All fields are mandatory !");
    }
    res.status (201).json ({ message: "Create Contact" });
    })

const get_contacts = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"hello all contacts"})
})

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