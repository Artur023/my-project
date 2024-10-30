"use client";

import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import {
  Container,
  FormWrapper,
  SubmitButton,
} from "../../styles/ContactPageStyles";

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
    <Container>
      {!submitted ? (
        <>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <FormWrapper onSubmit={handleSubmit}>
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
            <SubmitButton type="submit">Submit</SubmitButton>
          </FormWrapper>
        </>
      ) : (
        <Typography variant="h4" gutterBottom>
          Thank you for your interest, {formData.name}!
        </Typography>
      )}
    </Container>
  );
};

export default ContactPage;
