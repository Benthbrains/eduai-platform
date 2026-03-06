// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Chat Component
const Chat = ({ messages, onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>AI Tutoring</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          maxHeight: "200px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: "5px" }}>
            {msg.user && <strong>You:</strong>} {msg.user}
            {msg.ai && <strong>AI:</strong>} {msg.ai}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
        style={{ width: "70%", marginRight: "10px" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

// Notes Component
const Notes = ({ notes, onAdd }) => {
  const [noteInput, setNoteInput] = useState("");

  const handleAdd = () => {
    if (!noteInput.trim()) return;
    onAdd(noteInput);
    setNoteInput("");
  };

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Add a note..."
          style={{ width: "70%", marginRight: "10px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

// Main App Component
const App = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [notes, setNotes] = useState([]);

  const sendMessage = (message) => {
    setChatMessages([...chatMessages, { user: message }]);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { ai: `This is a mock AI answer for: ${message}` },
      ]);
    }, 500);
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>A Free, Open-Source Learning Platform (Grades 1–12)</h1>
        <p>
          AI-powered tutoring, exam practice with AI explanations, camera-based
          study tools, and notes management.
        </p>
      </header>

      <Chat messages={chatMessages} onSend={sendMessage} />
      <Notes notes={notes} onAdd={addNote} />
    </div>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
