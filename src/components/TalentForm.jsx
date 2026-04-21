import React, { useState } from "react";
import "./TalentForm.css"; 

const TalentForm = () => {
  const [formData, setFormData] = useState({
    name: '', // Changed from fullName to match input name
    age: '',
    email: '',
    talent: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.talent) {
      alert("Please select talent before Submitting!");
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Success!Thank you .");

    // Resetting state (keys must match the initial state exactly)
    setFormData({
      name: "",
      age: "",
      email: "",
      talent: "", 
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1>Talent Form for PUPBC</h1> {/* Changed H1 to h1 */}
        <p>Fill out the details below if interested</p>
        
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-field">
            <label htmlFor="name"> Name </label> {/* Fixed htmlfor */}
            <input
              type="text"
              id="name"
              name="name" // Matches the state key
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age Field */}
          <div className="form-field">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Talent Field */}
          <div className="form-field">
            <label htmlFor="talent">Talent</label>
            <select
              id="talent"
              name="talent"
              value={formData.talent}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your talent</option>
              <option value="Singing">Singing</option>
              <option value="Dancing">Dancing</option>
              <option value="Poetry">Poetry</option>
              <option value="Acting">Acting</option>
            </select>
          </div>

          <button type="submit" className="submit-btn"> 
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default TalentForm;