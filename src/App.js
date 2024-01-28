// App.js
import React, { useState } from "react";
import { User } from "./components/user";
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    city: "Baki", 
    description: "",
  });
  const [submittedData, setSubmittedData] = useState(null);  //bos div

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Form gönderildiğinde yapılacak işlemler
    console.log("Form submitted with data:", formData);

    // Formu sıfırla
    setFormData({
      name: "",
      surname: "",
      email: "",
      city: "Baki",
      description: "",
    });

    // Gönderilen veriyi sakla
    setSubmittedData(formData);
  };

  const handleInputChange = (e) => {
    // Her input değiştiğinde state'i güncelle
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <User
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Surname: {submittedData.surname}</p>
          <p>Email: {submittedData.email}</p>
          <p>City: {submittedData.city}</p>
          <p>Description: {submittedData.description}</p>
        </div>
      )}
    </>
  );
}

export default App;
