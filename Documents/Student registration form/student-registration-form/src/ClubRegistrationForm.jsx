import React, { useState } from "react";

const ClubRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    phone: "",
    club: "",
  });

  const clubs = [
    "Drama Club",
    "Music Club",
    "Debate Club",
    "Art Club",
    "Sports Club",
    "Science Club",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Registration Successful!\n\nStudent Name: ${formData.name}\nStudent ID: ${formData.studentId}\nPhone: ${formData.phone}\nClub: ${formData.club}`
    );
    setFormData({ name: "", studentId: "", phone: "", club: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-[#111] p-8 rounded-2xl shadow-lg w-full max-w-md border border-white">
        <h2 className="text-2xl font-bold text-green-500 mb-6 text-center">
          Club Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Student Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-3 rounded-md bg-black border border-gray-500 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Student ID */}
          <div>
            <label className="block mb-2 text-sm font-medium">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              placeholder="e.g. LUCT2025-1234"
              className="w-full p-3 rounded-md bg-black border border-gray-500 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="e.g. +266 5000 0000"
              className="w-full p-3 rounded-md bg-black border border-gray-500 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Club Selection */}
          <div>
            <label className="block mb-2 text-sm font-medium">Select Club</label>
            <select
              name="club"
              value={formData.club}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-black border border-gray-500 text-white focus:outline-none focus:border-green-500"
            >
              <option value="">-- Choose a Club --</option>
              {clubs.map((club, index) => (
                <option key={index} value={club}>
                  {club}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubRegistrationForm;
