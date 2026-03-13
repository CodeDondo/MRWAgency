import { Resend } from "resend";

export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const sanitize = (value) => (typeof value === "string" ? value.trim() : "");

const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export async function POST(request) {
  try {
    const body = await request.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email).toLowerCase();
    const phone = sanitize(body.phone);
    const company = sanitize(body.company);
    const service = sanitize(body.service);
    const message = sanitize(body.message);
    const consent = Boolean(body.consent);
    const website = sanitize(body.website);

    if (website) {
      return Response.json({ success: true, message: "Tak for din henvendelse." });
    }

    if (!name || !email || !message || !consent) {
      return Response.json(
        { success: false, message: "Navn, email, besked og samtykke er påkrævet." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ success: false, message: "Indtast en gyldig email-adresse." }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "kontakt@mrwagency.dk";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!resend) {
      return Response.json(
        {
          success: false,
          message: "Kontaktformularen er ikke konfigureret endnu. Tilføj RESEND_API_KEY i miljøvariabler.",
        },
        { status: 500 }
      );
    }

    const subject = `Ny henvendelse fra ${name}${service ? ` (${service})` : ""}`;

    const html = `
      <h2>Ny henvendelse fra MRW Agency kontaktformular</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || "Ikke angivet"}</p>
      <p><strong>Virksomhed:</strong> ${company || "Ikke angivet"}</p>
      <p><strong>Ydelse:</strong> ${service || "Ikke angivet"}</p>
      <p><strong>Besked:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const text = [
      "Ny henvendelse fra MRW Agency kontaktformular",
      `Navn: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone || "Ikke angivet"}`,
      `Virksomhed: ${company || "Ikke angivet"}`,
      `Ydelse: ${service || "Ikke angivet"}`,
      "Besked:",
      message,
    ].join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text,
    });

    return Response.json({
      success: true,
      message: "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.",
    });
  } catch {
    return Response.json(
      { success: false, message: "Der opstod en fejl ved afsendelse. Prøv igen om lidt." },
      { status: 500 }
    );
  }
}
