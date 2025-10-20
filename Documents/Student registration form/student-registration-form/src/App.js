import React, { useState } from "react";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addDoc(collection(db, "club_registrations"), {
        studentName,
        studentId,
        phoneNumber,
        selectedClub,
        timestamp: serverTimestamp(),
      });

      alert("✅ Registration Successful!");
      setStudentName("");
      setStudentId("");
      setPhoneNumber("");
      setSelectedClub("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Error: Could not register.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">🎭 Club Registration Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Student ID:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Club:</label>
          <select
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            required
          >
            <option value="">-- Choose a Club --</option>
            <option value="Drama Club">Drama Club</option>
            <option value="Tech Club">Tech Club</option>
            <option value="Debate Club">Debate Club</option>
            <option value="Sports Club">Sports Club</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default App;
