const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/saasWebapp");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    company: { type: String, required: true ,default:"Aceme"},
  },
  { timestamps: true } // handles createdAt & updatedAt automatically
);
const loginSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Company: { type: String, default:'Acme' },
    role: { type: String, required: true }, // e.g., "admin", "user"
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
const Login = mongoose.model("Login", loginSchema);

module.exports = { connectDB, Note, Login };
