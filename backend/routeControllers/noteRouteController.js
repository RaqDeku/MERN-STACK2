require('dotenv').config()
const Note = require('../models/noteModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const user = require('../models/userModel');

// Creating User Note 
const createNote = asyncHandler(async(req, res) => {
    let note = await Note.create({
        user:req.user.id,
        title:req.body.title,
        body:req.body.body
    })

    res.status(200).json({note})
})

// Get Notes
const getNote = asyncHandler(async(req, res) => {
    let note = await Note.find({user: req.user.id})

    res.status(200).json(note)
})

// Update Note
const updateNote = asyncHandler(async(req, res,) => {
    let note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw Error('No note found')
    }
    // Checks User
    if(!req.user) {
        res.status(401)
        throw Error('User not Found')
    }
    // Compare User to Note User
    if(note.user.toString() !== req.user.id) {
        res.status(401)
        throw Error('User not authorised')
    }

    let updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body,
        {new:true}
    )

    res.status(200).json(updatedNote)
})

// Delete Note
const deleteNote = asyncHandler(async(req, res) => {
    let note = await Note.findById(req.params.id)

    if(!note) {
        res.status(400)
        throw Error('No note found')
    }
    // Checks for User
    if(!req.user) {
        res.status(401)
        throw Error('User not Found')
    }
    // Compare User to Note User
    if(note.user.toString() !== req.user.id) {
        res.status(401)
        throw Error('User not authorised')
    }
    await note.remove()
    res.status(200).json({message:'deleted Goal'})
})


module.exports = {createNote, getNote, updateNote, deleteNote}