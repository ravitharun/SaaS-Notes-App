import React, { useRef, useState } from "react";
import Navbar from "./Navbar";

function Note() {
  const sampleNotes = [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Discuss project milestones and deadlines.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(sampleNotes);

  const Title = useRef("");
  const Content = useRef("");

  const AddNotes = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title: Title.current.value,
      content: Content.current.value,
    };
    if (!newNote.title || !newNote.content) {
      return alert("Please fill all fields!");
    }

    setNotes([...notes, newNote]);
    setOpen(false);
    Title.current.value = "";
    Content.current.value = "";
  };

  return (
    <>
      <Navbar />
      
      {/* Popup Form */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative animate-fadeIn">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Add Your Note
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  ref={Title}
                  placeholder="Enter note title"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Content</label>
                <textarea
                  ref={Content}
                  rows="4"
                  placeholder="Enter note content"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  onClick={AddNotes}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  type="submit"
                >
                  Save
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

      {/* Notes Section */}
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Add Note
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {note.title}
                </h2>
                <p className="text-gray-600 mb-4">{note.content}</p>
                <div className="flex justify-end gap-3">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
