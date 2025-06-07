import React, { useState } from "react";
import "../styles/Contacto.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío (API, EmailJS, etc.)
    console.log("Enviando mensaje:", form);
    alert("¡Tu mensaje ha sido enviado!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contacto-section">
      <h2 className="contacto-title">Contáctanos</h2>
      <div className="contacto-container">
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu consulta..."
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Enviar Mensaje
          </button>
        </form>
        <div className="contacto-info">
          <h3>También puedes encontrarnos en</h3>
          <p>
            <FaEnvelope className="icon" /> email@greenmarket.com
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +54 9 11 1234-5678
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
