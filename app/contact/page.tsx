"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка данных на бэкенд
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {!submitted ? (
        <>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </form>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Thank you for your interest, {formData.name}!
        </Typography>
      )}
    </Box>
  );
};

export default ContactPage;
