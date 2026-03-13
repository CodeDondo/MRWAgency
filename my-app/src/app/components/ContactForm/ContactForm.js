"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  consent: false,
  website: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      setStatus({
        type: "error",
        message: "Udfyld venligst navn, email, besked og samtykke.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Noget gik galt. Prøv igen.");
      }

      setStatus({
        type: "success",
        message: result.message || "Tak for din besked. Vi vender tilbage hurtigst muligt.",
      });
      setFormData(initialFormData);
      router.push("/tak-for-din-henvendelse");
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Kunne ikke sende formularen. Prøv igen senere.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name">Navn *</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </div>

        <div className={styles.field}>
          <label htmlFor="company">Virksomhed</label>
          <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Hvad ønsker du hjælp til?</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange}>
          <option value="">Vælg en ydelse</option>
          <option value="Webdesign">Webdesign</option>
          <option value="Webudvikling">Webudvikling</option>
          <option value="SEO">SEO</option>
          <option value="SoMe content creation">SoMe content creation</option>
          <option value="Branding">Branding</option>
          <option value="Vedligeholdelse">Vedligeholdelse</option>
          <option value="Andet">Andet</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Besked *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Fortæl kort om dit projekt, mål og ønsket tidsplan"
        />
      </div>

      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
      />

      <label className={styles.consent} htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <span>Jeg accepterer, at MRW Agency må kontakte mig angående min henvendelse.</span>
      </label>

      <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
        {isSubmitting ? "Sender..." : "Send henvendelse"}
      </button>

      {status.message ? (
        <p className={status.type === "success" ? styles.successMessage : styles.errorMessage}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
