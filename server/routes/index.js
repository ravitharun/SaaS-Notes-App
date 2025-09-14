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
      company: NotesInfo.company || "Aceme"
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
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.json(deletedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});
router.get("/EditGetNotes/:id",async(req,res)=>{
  try {
    const {id} = req.params;
    const note = await Note.findById(id);
    if(!note) return res.status(404).json({message:"Note not found"});
    console.log(note,'note')
    res.json(note);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})


module.exports = router;