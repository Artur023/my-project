"use client";

import React, { useState } from "react";
import StyledTextField from "../../styles/StyledTextField";
import { Button, Box, Typography } from "@mui/material";

const ContactForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      {!submitted ? (
        <>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <StyledTextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              type="email"
            />
            <StyledTextField
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
              sx={{ marginTop: "20px" }}
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

export default ContactForm;
