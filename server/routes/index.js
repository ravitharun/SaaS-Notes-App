const express = require('express');
const { Note } = require('../bin/Db');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.send('API running...');
});

// Add a new note
router.post('/AddNotes/New', async (req, res) => {
  try {
    const { NotesInfo } = req.body;

    if (!NotesInfo || !NotesInfo.title || !NotesInfo.content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const NotesUserAdd = new Note({
      title: NotesInfo.title,
      content: NotesInfo.content,
      company: NotesInfo.company || null
    });

    await NotesUserAdd.save();

    res.status(201).json({
      message: 'Note Added Successfully',
      note: NotesUserAdd
    });

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
});

// Get all notes
router.get("/getnots", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, 'id from ui');
    const notes = await Note.findByIdAndDelete(id); 

    console.log('deleted notes', notes);

    if (!notes) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
