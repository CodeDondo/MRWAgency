import { Resend } from "resend";

export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.CONTACT_TO_EMAIL || "kontakt@mrwagency.dk";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const sanitize = (value) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request) {
  try {
    const body = await request.json();

    const answers = {
      businessType: sanitize(body.businessType),
      need: sanitize(body.need),
      scope: sanitize(body.scope),
      hasWebsite: sanitize(body.hasWebsite),
      budget: sanitize(body.budget),
      name: sanitize(body.name),
      company: sanitize(body.company),
      email: sanitize(body.email).toLowerCase(),
      phone: sanitize(body.phone),
      message: sanitize(body.message),
    };

    const hasBotSubmission = sanitize(body.website || body.honeypot);
    if (hasBotSubmission) {
      return Response.json({ success: true, message: "Tak for din henvendelse." });
    }

    if (!answers.name || !answers.email) {
      return Response.json(
        { success: false, message: "Navn og email er påkrævet." },
        { status: 400 }
      );
    }

    if (!isValidEmail(answers.email)) {
      return Response.json(
        { success: false, message: "Indtast en gyldig email-adresse." },
        { status: 400 }
      );
    }

    if (!resend) {
      return Response.json(
        {
          success: false,
          message: "Resend er ikke konfigureret. Tilføj RESEND_API_KEY i miljøvariablerne.",
        },
        { status: 500 }
      );
    }

    const summary = [
      "<h2>Nyt forslagsskjema fra MRW Agency</h2>",
      `<p><strong>Virksomhedstype:</strong> ${answers.businessType || "Ikke angivet"}</p>`,
      `<p><strong>Behov:</strong> ${answers.need || "Ikke angivet"}</p>`,
      `<p><strong>Omfang:</strong> ${answers.scope || "Ikke angivet"}</p>`,
      `<p><strong>Eksisterende hjemmeside:</strong> ${answers.hasWebsite || "Ikke angivet"}</p>`,
      `<p><strong>Budget:</strong> ${answers.budget || "Ikke angivet"}</p>`,
      `<p><strong>Navn:</strong> ${answers.name}</p>`,
      `<p><strong>Virksomhed:</strong> ${answers.company || "Ikke angivet"}</p>`,
      `<p><strong>Email:</strong> ${answers.email}</p>`,
      `<p><strong>Telefonnummer:</strong> ${answers.phone || "Ikke angivet"}</p>`,
      `<p><strong>Besked:</strong></p>`,
      `<p>${(answers.message || "Ingen ekstra besked").replace(/\n/g, "<br />")}</p>`,
    ].join("");

    const plainText = [
      "Nyt forslagsskjema fra MRW Agency",
      `Virksomhedstype: ${answers.businessType || "Ikke angivet"}`,
      `Behov: ${answers.need || "Ikke angivet"}`,
      `Omfang: ${answers.scope || "Ikke angivet"}`,
      `Eksisterende hjemmeside: ${answers.hasWebsite || "Ikke angivet"}`,
      `Budget: ${answers.budget || "Ikke angivet"}`,
      `Navn: ${answers.name}`,
      `Virksomhed: ${answers.company || "Ikke angivet"}`,
      `Email: ${answers.email}`,
      `Telefonnummer: ${answers.phone || "Ikke angivet"}`,
      `Besked: ${answers.message || "Ingen ekstra besked"}`,
    ].join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: answers.email,
      subject: `Nyt forslagsskjema fra ${answers.name}`,
      html: summary,
      text: plainText,
    });

    return Response.json({
      success: true,
      message: "Tak! Dit forslag er sendt. Vi vender tilbage hurtigst muligt.",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Der opstod en fejl ved afsendelse. Prøv igen om lidt.",
      },
      { status: 500 }
    );
  }
}
