import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import UpgradeProPlan from "./UpgradeProPlan";

function Note() {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getnots");
        setNotes(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchNotes();
  }, []);

  // Add or Edit note
  const AddNotes = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill all fields!");
    try {
      if (edit) {
        // Edit note
        await axios.put(`http://localhost:3000/EditGetNotesEdit/${editId}`, {
          title,
          content,
        });
        setNotes((prev) =>
          prev.map((n) => (n._id === editId ? { ...n, title, content } : n))
        );
        setEdit(false);
        setEditId(null);
      } else {
        // Add new note
        const response = await axios.post(
          "http://localhost:3000/AddNotes/New",
          {
            NotesInfo: {
              title,
              content,
              Company: localStorage.getItem("Company"),
            },
          }
        );
        setNotes((prev) => [...prev, response.data]);
        if (response.data.message == "free mode complted by  Aceme") {
          setError("free mode complted by  Aceme");
          setAlert(true);
        } else {
          setError("free mode complted by  Globex");
          setAlert(true);
        }
      }
      setTitle("");
      setContent("");
      setOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // Set note for editing
  const Edit = async (NoteId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/EditGetNotes/${NoteId}`
      );
      const note = response.data;
      setTitle(note.title);
      setContent(note.content);
      setEdit(true);
      setEditId(NoteId);
      setOpen(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const NoteDelete = async (NoteId) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${NoteId}`);
      setNotes((prev) => prev.filter((note) => note._id !== NoteId));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Navbar />
      {/* Popup Form */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative animate-fadeIn">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              {edit ? "Edit Note" : "Add Your Note"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter note title"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="4"
                  placeholder="Enter note content"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={AddNotes}
                  className={`px-5 py-2 rounded-lg text-white transition ${
                    edit
                      ? "bg-green-600 hover:bg-green-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  type="submit"
                >
                  {edit ? "Edit" : "Save"}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {alert && <UpgradeProPlan />} {/* Notes Section */}
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
            <button
              onClick={() => {
                setOpen(true);
                setEdit(false);
                setTitle("");
                setContent("");
              }}
              disabled={alert}
              className={`${alert ? `cursor`: 'cursor-pointer'} bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition`}
            >
              + Add Note
            </button>
          </div>

          {!notes || notes.length === 0 ? (
            <center className="text-gray-500 text-lg font-semibold">
              NO NOTES ARE FOUND
            </center>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{note.content}</p>
                  <div className="flex justify-end gap-3">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => Edit(note._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => NoteDelete(note._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Note;
