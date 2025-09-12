import React from 'react';

function Note() {
  const sampleNotes = [
    { id: 1, title: "Meeting Notes", content: "Discuss project milestones and deadlines." },
    { id: 2, title: "Shopping List", content: "Milk, Bread, Eggs, Fruits." },
    { id: 3, title: "Ideas", content: "Build a new SaaS project for note taking." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Notes</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={()=>settime}>
            + Add Note
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{note.title}</h2>
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
  );
}

export default Note;
