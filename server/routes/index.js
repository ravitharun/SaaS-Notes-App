var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/AddNotes/New', function (req, res) {
  try {
    const { NotesInfo } = req.body
    console.log(NotesInfo, 'NotesInfo');
    res.json(
      {
        message: 'Notes Added Successfully'
      }
    )

  } catch (error) {
    return res.json({ message: error.message });
  }

});
router.get('/AddNotes', function (req, res) {
  try {

    res.json({ message: 'Notes Retrieved Successfully' });
  } catch (err) {
    return res.json({ message: err.message });
  }
});

module.exports = router;
