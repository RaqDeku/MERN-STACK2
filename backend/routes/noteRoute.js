const express = require('express');
const { createNote, getNote, updateNote, deleteNote } = require('../routeControllers/noteRouteController');


const app = express.Router();

app.post('/createnote', createNote);
app.get('/getnote', getNote)
app.put('/updatenote/:id', updateNote)
app.delete('/deletenote/:id', deleteNote)


module.exports = app

