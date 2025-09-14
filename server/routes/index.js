const express = require('express');
const { Note } = require('../bin/Db');
const router = express.Router();
// Add a new note
router.post('/AddNotes/New', async function (req, res) {
  try {
    const { NotesInfo } = req.body;

    if (!NotesInfo || !NotesInfo.title || !NotesInfo.content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const NotesUserAdd = new Note({
      title: "NotesInfo.title",
      content: "NotesInfo.content",
      company: "NotesInfo.company" || null
    });

    await NotesUserAdd.save();

    res.status(201).json({
      message: 'Note Added Successfully',
      note: NotesUserAdd
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get all notes
router.get("/responseNotes", async (req, res) => {
  try {
    const notes = await Note.find({});
    console.log(notes); 

    res.status(200).json({
      message: "Notes retrieved successfully",
      notes
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;
