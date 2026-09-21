"use client";

import { useMemo, useState } from "react";
import styles from "./LeadQuiz.module.css";

const stepDefinitions = [
  {
    id: "intro",
    type: "intro",
    title: "Lad os finde den rigtige løsning til din virksomhed",
    description: "Det tager ca. 60 sekunder.",
  },
  {
    id: "businessType",
    type: "choice",
    label: "Hvilken type virksomhed har du?",
    options: ["🧱 Håndværker", "💇 Frisør / Beauty", "🛍️ Detail", "💼 Konsulent / B2B", "Andet"],
  },
  {
    id: "need",
    type: "choice",
    label: "Hvad har du brug for?",
    options: [
      "🌐 Ny hjemmeside",
      "🔄 Ny hjemmeside til eksisterende virksomhed",
      "🛒 Webshop",
      "📱 UGC / SoMe content",
      "🚀 Hjemmeside + content",
      "🤷 Jeg er ikke sikker",
    ],
  },
  {
    id: "scope",
    type: "choice",
    label: "Hvor omfattende skal hjemmesiden være?",
    options: ["Minimalistisk / basis", "Professionel virksomhedshjemmeside", "Webshop"],
  },
  {
    id: "hasWebsite",
    type: "choice",
    label: "Har du allerede en hjemmeside?",
    options: ["Ja", "Nej", "Den trænger til en opdatering"],
  },
  {
    id: "budget",
    type: "choice",
    label: "Hvad er dit cirka budget?",
    options: [
      "Under 5.000 kr.",
      "5.000–10.000 kr.",
      "10.000–20.000 kr.",
      "20.000+ kr.",
      "Ved ikke endnu",
    ],
  },
  {
    id: "contact",
    type: "contact",
    label: "Kontakt",
    description: "🎯 Perfekt — vi har en idé om, hvad du leder efter.",
  },
];

const initialAnswers = {
  businessType: "",
  need: "",
  scope: "",
  hasWebsite: "",
  budget: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function LeadQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentStep = stepDefinitions[stepIndex];
  const progress = useMemo(() => ((stepIndex + 1) / stepDefinitions.length) * 100, [stepIndex]);
  const isOptionStep = currentStep.type === "choice";
  const currentSelection = currentStep.id ? answers[currentStep.id] ?? "" : "";

  const updateAnswer = (field, value) => {
    setAnswers((current) => ({ ...current, [field]: value }));
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...answers,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kunne ikke sende dit forslag.");
      }

      setSubmitted(true);
      setStatus({ type: "success", message: result.message || "Tak! Vi har modtaget dit forslag." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Der opstod en fejl. Prøv igen." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (isOptionStep && !currentSelection) {
      setStatus({ type: "error", message: "Vælg venligst et svar for at fortsætte." });
      return;
    }

    if (currentStep.type === "contact") {
      if (!answers.name || !answers.email) {
        setStatus({ type: "error", message: "Udfyld venligst navn og email." });
        return;
      }
      handleSubmit();
      return;
    }

    setStatus({ type: "", message: "" });
    setStepIndex((value) => Math.min(value + 1, stepDefinitions.length - 1));
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStatus({ type: "", message: "" });
      setStepIndex((value) => value - 1);
    }
  };

  const showSubmitButton = stepIndex === stepDefinitions.length - 1 && !submitted;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.progressWrap}>
          <div className={styles.progressBar} aria-label="Fremskridt i spørgeskemaet">
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className={styles.stepInfo}>
          <span>Spørgsmål {Math.min(stepIndex + 1, stepDefinitions.length)}</span>
          <span>{stepDefinitions.length} trin</span>
        </div>

        <div className={styles.content}>
          {currentStep.type === "intro" ? (
            <div className={styles.intro}>
              <p className={styles.eyebrow}>Intro</p>
              <h2 className={styles.title}>
                <span className={styles.highlight}>👋</span> {currentStep.title}
              </h2>
              <p className={styles.description}>{currentStep.description}</p>
            </div>
          ) : null}

          {isOptionStep && currentStep.type !== "intro" ? (
            <div>
              <p className={styles.eyebrow}>{currentStep.label}</p>
              <div className={styles.options}>
                {currentStep.options.map((option) => {
                  const selected = answers[currentStep.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.optionButton} ${selected ? styles.optionButtonSelected : ""}`}
                      onClick={() => updateAnswer(currentStep.id, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {currentStep.type === "contact" ? (
            <div>
              <p className={styles.eyebrow}>{currentStep.label}</p>
              <h3 className={styles.subtitle}>{currentStep.description}</h3>

              <div className={styles.contactGrid}>
                <div className={styles.field}>
                  <label htmlFor="name">Navn</label>
                  <input
                    id="name"
                    type="text"
                    value={answers.name}
                    onChange={(event) => updateAnswer("name", event.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Virksomhed</label>
                  <input
                    id="company"
                    type="text"
                    value={answers.company}
                    onChange={(event) => updateAnswer("company", event.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={answers.email}
                    onChange={(event) => updateAnswer("email", event.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Telefonnummer</label>
                  <input
                    id="phone"
                    type="tel"
                    value={answers.phone}
                    onChange={(event) => updateAnswer("phone", event.target.value)}
                  />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="message">Eventuelt besked</label>
                  <textarea
                    id="message"
                    value={answers.message}
                    onChange={(event) => updateAnswer("message", event.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : null}

          {status.message ? (
            <p className={`${styles.status} ${status.type === "success" ? styles.success : styles.error}`}>
              {status.message}
            </p>
          ) : null}
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.backButton} onClick={handleBack} disabled={stepIndex === 0 || isSubmitting}>
            Tilbage
          </button>

          {showSubmitButton ? (
            <button type="button" className={styles.nextButton} onClick={handleNext} disabled={isSubmitting}>
              Næste
            </button>
          ) : (
            <button
              type="button"
              className={styles.submitButton}
              onClick={handleNext}
              disabled={isSubmitting || submitted}
            >
              {isSubmitting ? "Sender..." : submitted ? "Sendt" : "Få mit forslag →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
