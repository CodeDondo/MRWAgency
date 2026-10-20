"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "../../lib/track";
import styles from "./LeadQuiz.module.css";

const ugcOnlyNeed = "📱 UGC / SoMe content";

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

const englishStepDefinitions = [
  {
    id: "intro",
    type: "intro",
    title: "Let's find the right solution for your business",
    description: "It takes about 60 seconds.",
  },
  {
    id: "businessType",
    type: "choice",
    label: "What type of business do you have?",
    options: ["🧱 Tradesperson", "💇 Hair / Beauty", "🛍️ Retail", "💼 Consultant / B2B", "Other"],
  },
  {
    id: "need",
    type: "choice",
    label: "What do you need?",
    options: [
      "🌐 New website",
      "🔄 New website for an existing business",
      "🛒 Online shop",
      "📱 UGC / Social media content",
      "🚀 Website + content",
      "🤷 I'm not sure",
    ],
  },
  {
    id: "scope",
    type: "choice",
    label: "How complex should the website be?",
    options: ["Minimal / basic", "Professional business website", "Online shop"],
  },
  {
    id: "hasWebsite",
    type: "choice",
    label: "Do you already have a website?",
    options: ["Yes", "No", "It needs an update"],
  },
  {
    id: "budget",
    type: "choice",
    label: "What is your approximate budget?",
    options: ["Under DKK 5,000", "DKK 5,000–10,000", "DKK 10,000–20,000", "DKK 20,000+", "Not sure yet"],
  },
  {
    id: "contact",
    type: "contact",
    label: "Contact details",
    description: "🎯 Great — we have an idea of what you're looking for.",
  },
];

const englishUgcOnlyNeed = "📱 UGC / Social media content";

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
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const steps = isEnglish ? englishStepDefinitions : stepDefinitions;
  const ugcNeed = isEnglish ? englishUgcOnlyNeed : ugcOnlyNeed;
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const visibleSteps = steps.filter(
    (step) => answers.need !== ugcNeed || !["scope", "hasWebsite"].includes(step.id)
  );
  const currentStep = visibleSteps[stepIndex];
  const progress = ((stepIndex + 1) / visibleSteps.length) * 100;
  const isOptionStep = currentStep.type === "choice";
  const currentSelection = currentStep.id ? answers[currentStep.id] ?? "" : "";

  const updateAnswer = (field, value) => {
    setAnswers((current) => ({
      ...current,
      [field]: value,
      ...(field === "need" && value === ugcNeed ? { scope: "", hasWebsite: "" } : {}),
    }));
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
        throw new Error(
          isEnglish
            ? "We couldn't send your request. Please try again later."
            : result.message || "Kunne ikke sende din forespørgsel."
        );
      }

      trackEvent("generate_lead", {
        form_name: "quiz",
        business_type: answers.businessType,
        need: answers.need,
        budget: answers.budget,
      });
      setSubmitted(true);
      setStatus({
        type: "success",
        message: isEnglish
          ? "Thank you! We've received your request."
          : result.message || "Tak! Vi har modtaget dit forslag.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || (isEnglish ? "Something went wrong. Please try again." : "Der opstod en fejl. Prøv igen.") });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (isOptionStep && !currentSelection) {
      setStatus({ type: "error", message: isEnglish ? "Please choose an answer to continue." : "Vælg venligst et svar for at fortsætte." });
      return;
    }

    if (currentStep.type === "contact") {
      if (!answers.name || !answers.email) {
        setStatus({ type: "error", message: isEnglish ? "Please enter your name and email." : "Udfyld venligst navn og email." });
        return;
      }
      handleSubmit();
      return;
    }

    trackEvent("quiz_step", {
      step_id: currentStep.id,
      step_number: stepIndex + 1,
      answer: currentSelection || undefined,
    });
    setStatus({ type: "", message: "" });
    setStepIndex((value) => Math.min(value + 1, visibleSteps.length - 1));
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStatus({ type: "", message: "" });
      setStepIndex((value) => value - 1);
    }
  };

  const handleRestart = () => {
    setStepIndex(0);
    setAnswers(initialAnswers);
    setStatus({ type: "", message: "" });
    setSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.progressWrap}>
          <div className={styles.progressBar} aria-label={isEnglish ? "Questionnaire progress" : "Fremskridt i spørgeskemaet"}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className={styles.stepInfo}>
          <span>{isEnglish ? "Question" : "Spørgsmål"} {Math.min(stepIndex + 1, visibleSteps.length)}</span>
          <span>{visibleSteps.length} {isEnglish ? "steps" : "trin"}</span>
        </div>

        <div className={styles.content}>
          {currentStep.type === "intro" ? (
            <div className={styles.intro}>
              <p className={styles.eyebrow}>{isEnglish ? "Introduction" : "Intro"}</p>
              <h2 className={styles.title}>
                <span className={styles.highlight}>👋</span> {currentStep.title}
              </h2>
              <p className={styles.description}>{currentStep.description}</p>
            </div>
          ) : null}

          {isOptionStep && currentStep.type !== "intro" ? (
            <div>
              <p className={styles.eyebrow}>{currentStep.label}</p>
              <div className={styles.options} role="group" aria-label={currentStep.label}>
                {currentStep.options.map((option) => {
                  const selected = answers[currentStep.id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      className={`${styles.optionButton} ${selected ? styles.optionButtonSelected : ""}`}
                      aria-pressed={selected}
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
                  <label htmlFor="name">{isEnglish ? "Name" : "Navn"}</label>
                  <input
                    id="name"
                    type="text"
                    value={answers.name}
                    onChange={(event) => updateAnswer("name", event.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">{isEnglish ? "Company" : "Virksomhed"}</label>
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
                  <label htmlFor="phone">{isEnglish ? "Phone number" : "Telefonnummer"}</label>
                  <input
                    id="phone"
                    type="tel"
                    value={answers.phone}
                    onChange={(event) => updateAnswer("phone", event.target.value)}
                  />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="message">{isEnglish ? "Additional message" : "Eventuelt besked"}</label>
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
          {submitted ? (
            <button type="button" className={styles.nextButton} onClick={handleRestart}>
              {isEnglish ? "Start over" : "Gå tilbage til start"}
            </button>
          ) : (
            <>
              <button
                type="button"
                className={styles.backButton}
                onClick={handleBack}
                disabled={stepIndex === 0 || isSubmitting}
              >
                {isEnglish ? "Back" : "Tilbage"}
              </button>
              <button
                type="button"
                className={styles.nextButton}
                onClick={handleNext}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (isEnglish ? "Sending..." : "Sender...")
                  : currentStep.type === "contact"
                    ? (isEnglish ? "Send enquiry" : "Send forespørgsel")
                    : (isEnglish ? "Next →" : "Næste →")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
