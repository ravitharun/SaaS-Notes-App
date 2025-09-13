import React, { useState } from "react";

function Note() {
  const sampleNotes = [
    {
      id: 1,
      title: "Meeting Notes",
      content: "Discuss project milestones and deadlines.",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Popup Add Note Form */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 font-sans relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add Your Note</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter note title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter note content"
              ></textarea>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Save
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes Section */}
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => setOpen(true)}
            >
              + Add Note
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {note.title}
                </h2>
                <p className="text-gray-600">{note.content}</p>
                <div className="mt-4 flex justify-end space-x-2">
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
