// src/ContactoPage.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #d29990;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #d29990;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #d29990;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  height: 150px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #d29990;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c77b7a;
  }
`;

const ContactInfo = styled.div`
  margin-top: 40px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #333;

  p {
    margin-bottom: 10px;
  }

  a {
    color: #d29990;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo por correo electrónico o almacenarlo.
    alert('Mensaje enviado');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <Title>Contacto</Title>
      <ContactForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Nombre:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Label htmlFor="email">Correo Electrónico:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Label htmlFor="message">Mensaje:</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <Button type="submit">Enviar Mensaje</Button>
      </ContactForm>

      <ContactInfo>
        <p>O si prefieres, contáctanos directamente:</p>
        <p>Correo: <a href="mailto:info@pasteleria.com">info@pasteleria.com</a></p>
        <p>Teléfono: <a href="tel:+573236024169">+57 323 602 4169</a></p>
        <p>WhatsApp: <a href="https://wa.me/573236024169">Envíanos un mensaje</a></p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default ContactoPage;
