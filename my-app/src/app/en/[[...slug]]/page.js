import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm/ContactForm";
import LeadQuiz from "../../components/LeadQuiz/LeadQuiz";
import homeStyles from "../../page.module.css";
import legalStyles from "../../legal.module.css";
import aboutStyles from "../../om-os/om-os.module.css";
import portfolioStyles from "../../portfolio/portfolio.module.css";
import pricingStyles from "../../priser/priser.module.css";
import contentStyles from "../../content-creation/content-creation.module.css";
import serviceStyles from "../../services/[slug]/service.module.css";
import { createPageMetadata } from "../../seo";

const services = {
  webdesign: {
    title: "Web design",
    subtitle: "Modern design that strengthens your brand",
    description: "We design user-friendly websites focused on conversion, credibility and a visual identity that fits your business.",
    includes: ["Wireframes and structure", "Design system and visual direction", "Mobile-optimised layout", "Clear calls to action and improved user journeys"],
    process: ["Kick-off and discovery", "Design proposal and feedback rounds", "Final approval and handover"],
    image: "/services/webdesign.svg",
  },
  webudvikling: {
    title: "Web development",
    subtitle: "Fast, reliable solutions built for growth",
    description: "We build high-performance websites with clean code, making your solution scalable and easy to develop further.",
    includes: ["Development with a modern tech stack", "Responsive frontend", "Technical SEO foundations", "Integrations as needed"],
    process: ["Technical discovery", "Development in stages", "Testing, launch and support"],
    image: "/services/webudvikling.svg",
  },
  seo: {
    title: "SEO",
    subtitle: "Get found by the right customers",
    description: "We work with technical SEO, content and structure to help your website rank better in search engines and generate more enquiries.",
    includes: ["SEO audit and prioritised action plan", "On-page optimisation", "Content structure and keyword focus", "Ongoing performance reviews"],
    process: ["Analysis and baseline", "Implementing improvements", "Measurement, reporting and next steps"],
    image: "/services/seo.svg",
  },
  "some-content-creation": {
    title: "Social media content creation",
    subtitle: "Content that engages and builds relationships",
    description: "We create targeted social media content to give your brand a clear voice and a consistent publishing rhythm.",
    includes: ["Monthly content plan and direction", "Graphics, captions and posts", "Video ideas and campaign concepts", "Adaptation to platforms and audiences"],
    process: ["Strategy and content pillars", "Production and approval", "Publishing and evaluation"],
    image: "/services/some-content-creation.svg",
  },
  branding: {
    title: "Branding",
    subtitle: "A strong identity that makes you recognisable",
    description: "We help sharpen your visual and verbal identity so your brand stands out in the market.",
    includes: ["Brand positioning", "Visual style and tone of voice", "Logo and identity direction", "Practical brand guidelines"],
    process: ["Brand discovery workshop", "Concept development", "Implementation across channels"],
    image: "/services/branding.svg",
  },
  vedligeholdelse: {
    title: "Maintenance",
    subtitle: "Reliable support after launch",
    description: "We take care of updates, technical monitoring and improvements to keep your website secure and fast.",
    includes: ["Security updates", "Backups and monitoring", "Performance improvements", "Ongoing guidance and support"],
    process: ["Service agreement", "Monthly maintenance", "Quarterly review and recommendations"],
    image: "/services/vedligeholdelse.svg",
  },
};

const legalPages = {
  ansvarsfraskrivelse: {
    title: "Disclaimer",
    sections: [
      ["1. General information", "The content on this website is provided for general information about MRW Agency and its services. It does not constitute legal, financial or other professional advice."],
      ["2. Accuracy and completeness", "We aim to keep the information accurate and up to date, but cannot guarantee that all content is complete, error-free or current at all times."],
      ["3. Third-party websites and links", "This website may link to third-party websites and platforms. MRW Agency does not control those websites and is not responsible for their content, security or data processing."],
      ["4. Service interruptions", "We are not liable for losses resulting from technical errors, outages, viruses, network issues or website unavailability, except where mandatory law provides otherwise."],
      ["5. Limitation of liability", "To the extent permitted by law, MRW Agency is not liable for indirect losses, including loss of profit, business interruption, loss of goodwill or consequential damages."],
      ["6. Governing law", "This disclaimer is governed by Danish law. Any disputes shall be decided by the Danish courts."],
    ],
  },
  cookiepolitik: {
    title: "Cookie policy",
    sections: [
      ["1. Purpose", "This policy explains how MRW Agency uses cookies and similar technologies on this website, in accordance with applicable Danish and EU rules."],
      ["2. What are cookies?", "Cookies are small text files stored on your device when you visit a website. They can make a website work, remember preferences and analyse traffic."],
      ["3. Types of cookies", "Necessary cookies support basic functions and security. Preference cookies remember choices such as language and display settings. Statistics cookies help us understand website usage. Marketing cookies are only used with consent."],
      ["4. Legal basis", "Necessary cookies are used on the basis of our legitimate interest in providing a functioning website. Other cookies are only used with valid consent."],
      ["5. Consent and withdrawal", "You can choose which cookies to accept on your first visit and change or withdraw your consent at any time using the Cookie settings button at the bottom of the page."],
      ["5.1 Analytics", "If you accept statistics cookies, we use Google Analytics (measurement ID: G-5SBEY45YVP) for anonymised traffic measurement."],
      ["6. Storage period", "Cookies are deleted when they expire. Session cookies are deleted when you close your browser; persistent cookies remain for the period described in the cookie settings."],
      ["7. Third parties", "Third-party services may set cookies on your device. Their processing is subject to their own privacy policies and any applicable data processing agreements."],
      ["8. Contact", "Questions about our use of cookies can be sent to kontakt@mrwagency.dk."],
    ],
  },
  privatlivspolitik: {
    title: "Privacy policy",
    sections: [
      ["1. Data controller", "MRW Agency is the data controller for personal data received through this website and in connection with customer relationships. Contact: kontakt@mrwagency.dk · +45 36 20 75 40 · CVR 44231662."],
      ["2. Information we process", "We may process contact details, communications and enquiries, invoicing information, and technical data such as IP address, browser type and website usage."],
      ["3. Purposes and legal basis", "We use personal data to respond to enquiries and prepare offers, deliver agreed services, meet bookkeeping obligations and, where required, send marketing with consent."],
      ["4. Sharing and processors", "We only share personal data with trusted processors, such as hosting, email and analytics providers, when necessary. Data processing agreements are entered into where required by law."],
      ["5. Transfers outside the EU/EEA", "Transfers outside the EU/EEA only take place with a valid transfer mechanism, such as the European Commission's Standard Contractual Clauses."],
      ["6. Retention and deletion", "We retain personal data only as long as necessary for the purposes for which it was collected or as required by law. Accounting records are generally retained for five years after the end of the financial year."],
      ["7. Your rights", "You may have the right to access, rectify or erase your personal data, restrict or object to processing, request data portability and withdraw consent."],
      ["8. Complaints", "You may complain to the Danish Data Protection Agency (Datatilsynet), Carl Jacobsens Vej 35, 2500 Valby, Denmark."],
    ],
  },
  handelspolitik: {
    title: "Terms of sale",
    sections: [
      ["1. Business information", "MRW Agency · kontakt@mrwagency.dk · +45 30 25 03 44 · CVR 44231662."],
      ["2. Orders", "Services are ordered through a written agreement, offer or contract. An agreement is binding once the customer has accepted our order confirmation or offer in writing."],
      ["3. Prices and invoicing", "Prices are stated in Danish kroner (DKK) and exclude VAT unless otherwise specified. Invoicing may take place during the project, at milestones or on delivery, as agreed."],
      ["4. Payment", "Payment is due within 8 days unless agreed otherwise. Late payment interest and fees may be charged in accordance with applicable Danish law."],
      ["5. Digital services", "Services are delivered according to the agreed milestones and schedule. Delivery may be affected by customer approvals, materials or third parties."],
      ["6. Complaints", "Complaints must be submitted in writing without undue delay after discovering an issue. MRW Agency will assess documented issues and remedy them within a reasonable time."],
      ["7. Consumer information", "Mandatory consumer protection rules apply to consumer purchases. Any additional consumer terms will be set out in the relevant agreement."],
      ["8. Complaints and disputes", "Complaints can be sent to kontakt@mrwagency.dk. Where relevant, consumer disputes may be referred to the Danish Consumer Complaints Board or the EU online dispute resolution platform."],
    ],
  },
  "vilkaar-og-betingelser": {
    title: "Terms and conditions",
    sections: [
      ["1. Scope", "These terms apply to agreements for digital agency services from MRW Agency, including web design, development, SEO, consultancy and social media content, unless agreed otherwise in writing."],
      ["2. Formation of agreement", "An agreement is formed when the customer accepts an offer, order confirmation or contract in writing. Oral agreements are binding only when confirmed in writing."],
      ["3. Prices and payment", "Prices are stated in DKK excluding VAT unless noted otherwise. Payment is due within 8 days of the invoice date unless agreed otherwise. Late payment interest and reminder fees may apply."],
      ["4. Delivery and customer cooperation", "Delivery dates are estimates unless agreed otherwise in writing. The customer must provide required information, materials and approvals on time; delays may postpone delivery."],
      ["5. Changes and additional work", "Changes to the agreed scope after project start are treated as additional work and charged at the applicable hourly rate or under a separate offer."],
      ["6. Intellectual property", "Agreed rights to delivered material transfer to the customer upon full payment unless agreed otherwise. UGC is subject to separate usage terms only when expressly included in and accepted as part of the specific written agreement. MRW Agency retains general know-how, methods and templates; third-party material remains subject to its licence."],
      ["7. Confidentiality and personal data", "The parties must keep confidential information confidential. Personal data is processed in accordance with applicable data protection law and any data processing agreements."],
      ["8. Limitation of liability", "MRW Agency is not liable for indirect losses, including business interruption, loss of profit or data, except where mandatory law or gross negligence or wilful misconduct provides otherwise."],
      ["9. Governing law and venue", "The agreement is governed by Danish law. Disputes should first be resolved amicably and otherwise decided by the Danish courts."],
    ],
  },
  refusionspolitik: {
    title: "Refund policy",
    sections: [
      ["1. General", "MRW Agency primarily provides customised digital services. Refunds and cancellations are assessed based on how much of the agreed service has been completed."],
      ["2. Business agreements", "Agreed contract terms apply to business customers. Work already completed, accrued hours and third-party costs are non-refundable. Notice periods apply to ongoing services as agreed."],
      ["3. Consumers and right of withdrawal", "Consumer agreements may have a 14-day right of withdrawal under Danish consumer law. This right may be lost in whole or in part if a digital service begins with the consumer's express consent."],
      ["4. Partial refunds", "Any refund is calculated proportionally based on services not yet delivered. Documented software, advertising, licence and third-party costs may be deducted."],
      ["5. Requesting a refund", "Send a written request to kontakt@mrwagency.dk with your order number, reasons and relevant documentation. We will review it within a reasonable time and reply in writing."],
      ["6. Payment of refunds", "Approved refunds are normally paid within 10 banking days to the original payment method unless agreed otherwise in writing."],
    ],
  },
  "brugsret-ugc": {
    title: "UGC content usage rights",
    updatedAt: "30 September 2026",
    sections: [
      ["1. When these terms apply", "These standard terms only apply to a specific delivery when the offer, order confirmation or contract refers to them and the customer accepts them in writing. They apply only to UGC content."],
      ["2. Customer usage rights", "After full payment, the customer receives a non-exclusive right to use the final approved UGC files to the extent MRW Agency holds the necessary rights. Unless agreed otherwise, this covers the customer's organic social media posts, website, newsletters and presentations."],
      ["3. Paid advertising", "Paid advertisements, including boosting, dark posts and whitelisting, are permitted only when expressly agreed. The agreement should specify platforms, territory, duration and limitations."],
      ["4. MRW Agency portfolio use", "MRW Agency may show finished customer UGC in its portfolio, social media, case studies or sales material only with the customer's separate prior written permission."],
      ["5. Approval and information", "The customer must review and approve content, scripts, captions and factual claims before publication. Neither party may edit content in a way that misrepresents the product or a contributor's experience."],
      ["6. Third-party rights", "Music, images, fonts, locations, trademarks and identifiable people may require separate rights or licences. Use must remain within documented permissions, including platform and advertising limitations."],
      ["7. Prohibited use", "Content must not be used unlawfully, misleadingly or in a way that harms a person's or business's reputation, exceeds agreed rights, or synthetically alters a person's face, voice or statements without written consent."],
      ["8. Personal data and contact", "Each party must comply with applicable data protection law, including GDPR and Danish data protection legislation. Questions can be sent to kontakt@mrwagency.dk."],
    ],
  },
};

const legalPaths = Object.keys(legalPages);

const pricingPackages = [
  ["Starter Website", "DKK 4,000–7,000", "Ideal for small businesses looking for a professional online presence.", ["1–3 pages (home, about, contact)", "Mobile-friendly design", "SEO basics", "Contact form", "Fast loading", "Hosting setup"], ["+ DKK 1,000 per extra page", "+ DKK 1,500 for SEO optimisation", "+ DKK 1,000 for Google Analytics"]],
  ["Business Website", "DKK 8,000–15,000", "For businesses looking for a professional website with branding and more content.", ["5–8 pages", "Custom design", "SEO optimisation", "Blog or news section", "Speed optimisation", "Google Analytics", "Contact form"], ["Bonus: 1-hour introduction to editing the website yourself"]],
  ["Website + UGC / Social Content", "DKK 14,000–22,000", "Combine a strong website with authentic content that builds visibility and engagement.", ["Business website", "Social media profile setup", "12 social media posts", "4–6 short-form videos", "30-day content plan", "Edits for multiple platforms"], ["Ideal for a strong presence across your website and social media"]],
  ["UGC / Social Media Management", "DKK 2,500–7,000 / month", "Ongoing support for businesses that want to stay visible without managing all the content alone.", ["8–12 social media posts", "4 short-form videos", "Content plan and concepts", "Analytics report", "Creative adjustments and campaign ideas"], ["Scalable to the amount of content and support you need"]],
];

const otherPages = ["", "priser", "om-os", "book-et-moede", "portfolio", "content-creation", "faq", "kontakt", "sporgeskema", "tak-for-din-henvendelse", ...legalPaths, ...Object.keys(services).map((slug) => `services/${slug}`)];

export function generateStaticParams() {
  return otherPages.map((path) => ({ slug: path ? path.split("/") : [] }));
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const service = path.startsWith("services/") ? services[path.slice("services/".length)] : null;
  const title = service?.title || legalPages[path]?.title || ({
        "": "Web design, websites and content creation",
        priser: "Pricing",
        "om-os": "About",
        "book-et-moede": "Book a meeting",
        portfolio: "Portfolio",
        "content-creation": "Content creation",
        faq: "FAQ",
        kontakt: "Contact",
        sporgeskema: "Project questionnaire",
        "tak-for-din-henvendelse": "Thank you for your enquiry",
      })[path];
  if (!title) return {};
  const descriptions = {
    "": "Web design, development, SEO and content creation for businesses that want a stronger online presence.",
    priser: "Explore website, social media content and maintenance packages from MRW Agency.",
    "om-os": "Meet Morten and learn about MRW Agency's approach to web design and digital solutions.",
    "book-et-moede": "Book an introductory meeting with MRW Agency to discuss your website or content project.",
    portfolio: "Explore selected websites and content projects created by MRW Agency.",
    "content-creation": "UGC and organic content solutions for businesses that want to build visibility and trust.",
    faq: "Answers to common questions about MRW Agency's services, process and collaboration.",
    kontakt: "Contact MRW Agency by email or phone to discuss your project.",
    sporgeskema: "Tell us about your business and needs to receive a tailored digital project proposal.",
  };

  return createPageMetadata({
    title,
    description:
      service?.description || descriptions[path] || `Information about ${title.toLowerCase()} at MRW Agency.`,
    path: `/en${path ? `/${path}` : ""}`,
    locale: "en_US",
    noIndex: path === "tak-for-din-henvendelse",
  });
}

function Heading({ eyebrow, title, children }) {
  return (
    <header className={legalStyles.section}>
      {eyebrow ? <p className={legalStyles.meta}>{eyebrow}</p> : null}
      <h1 className={legalStyles.title}>{title}</h1>
      {children ? <p>{children}</p> : null}
    </header>
  );
}

export default async function EnglishPage({ params }) {
  const { slug = [] } = await params;
  const path = slug.join("/");
  const service = path.startsWith("services/") ? services[path.slice("services/".length)] : null;
  const legal = legalPages[path];

  if (path.startsWith("services/") && !service) notFound();
  if (path && !service && !legal && !otherPages.includes(path)) notFound();

  if (path === "") {
    return (
      <div className={homeStyles.page}>
        <main className={homeStyles.main}>
          <div className={homeStyles.topBannerWrap}>
            <Image src="/heroBanner.png" alt="MRW Agency banner" width={1600} height={300} priority className={homeStyles.topBanner} />
          </div>
          <section className={homeStyles.hero}>
            <div className={homeStyles.heroContent}>
              <p className={homeStyles.kicker}>MRW Agency</p>
              <h1 className={homeStyles.heroTitle}>Websites and content that make your business look its best online.</h1>
              <p className={homeStyles.heroText}>We help small and medium-sized businesses with modern websites, branding and social media content, helping you build a stronger digital presence and attract more relevant enquiries.</p>
              <div className={homeStyles.ctas}><Link href="/en/book-et-moede" className={homeStyles.primary}>Book a meeting</Link></div>
              <div className={homeStyles.heroStats}>
                <div><strong>Mobile-friendly</strong><span>Design that works on every device</span></div>
                <div><strong>Fast delivery</strong><span>A streamlined process with clear structure</span></div>
                <div><strong>Brand-focused</strong><span>A visual direction that fits your business</span></div>
              </div>
            </div>
            <div className={homeStyles.heroMedia}><Image src="/webhero.jpg" alt="MRW Agency website design" width={900} height={700} priority className={homeStyles.heroImage} /></div>
          </section>
          <section className={`${homeStyles.section} ${homeStyles.quizSection}`}>
            <div className={homeStyles.sectionHeading}><p className={homeStyles.kicker}>Services</p><h2>How we can help</h2><p>We combine design, technology and content to build a strong online presence for your business.</p></div>
            <div className={homeStyles.cardGrid}>
              <article className={homeStyles.card}><h3>Web design</h3><p>Professional layouts focused on credibility, conversion and a distinctive visual identity.</p></article>
              <article className={homeStyles.card}><h3>Web development</h3><p>Fast, modern websites built for performance, scalability and simple maintenance.</p></article>
              <article className={homeStyles.card}><h3>SEO & visibility</h3><p>Technical SEO and structure to help the right customers find your business.</p></article>
              <article className={homeStyles.card}><h3>UGC / social content</h3><p>Authentic social media content that builds visibility, engagement and awareness.</p></article>
            </div>
          </section>
          <section className={homeStyles.processSection}>
            <div className={homeStyles.sectionHeading}><p className={homeStyles.kicker}>Our process</p><h2>A straightforward process from idea to launch</h2></div>
            <div className={homeStyles.processGrid}>
              <article className={homeStyles.processCard}><span>01</span><h3>Discovery</h3><p>We define your goals, audience and the features you need.</p></article>
              <article className={homeStyles.processCard}><span>02</span><h3>Design & content</h3><p>We create a solution that fits your brand and speaks to your customers.</p></article>
              <article className={homeStyles.processCard}><span>03</span><h3>Launch & growth</h3><p>We launch your website and can support you with maintenance, content and optimisation.</p></article>
            </div>
          </section>
          <section className={homeStyles.section}><div className={homeStyles.sectionHeading}><p className={homeStyles.kicker}>Find the right fit</p><h2>Get matched with the right solution for your business</h2><p>Tell us about your business, needs and budget to receive a practical recommendation.</p></div><LeadQuiz /></section>
          <section className={homeStyles.section}>
            <div className={homeStyles.sectionHeading}>
              <p className={homeStyles.kicker}>Partnerships</p>
              <h2>Businesses we&apos;ve worked with</h2>
              <p>Some of our past collaborations, supporting their digital presence.</p>
            </div>
            <div className={homeStyles.partnerMarquee} aria-label="Client and partner logos">
              <div className={homeStyles.partnerTrack}>
                {[
                  { name: "Salon Jozi", href: "https://www.salonjozi.dk", src: "/salonJozi.png" },
                  { name: "Creators i Mod", href: "https://www.creatorsimod.dk", src: "/creatorsImod.png" },
                  { name: "Nordic Retro", href: "https://www.nordiccretro.dk", src: "/nordicRetro.png" },
                ].map((brand, index) => (
                  <article key={`${brand.name}-${index}`} className={homeStyles.partnerSlide}>
                    <a href={brand.href} target="_blank" rel="noopener noreferrer" className={homeStyles.partnerImageLink} aria-label={`Visit ${brand.name}`}>
                      <Image src={brand.src} alt={brand.name} width={420} height={220} className={homeStyles.partnerImage} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className={homeStyles.finalCta}><div><p className={homeStyles.kicker}>Ready for the next step?</p><h2>Get a website and digital solution that lifts your brand.</h2></div><Link href="/en/book-et-moede" className={homeStyles.finalCtaButton}>Book a no-obligation call</Link></section>
        </main>
      </div>
    );
  }

  if (service) {
    return (
      <main className={serviceStyles.wrapper}>
        <section className={serviceStyles.hero}>
          <div className={serviceStyles.heroText}><p className={serviceStyles.kicker}>Service</p><h1 className={serviceStyles.title}>{service.title}</h1><p className={serviceStyles.subtitle}>{service.subtitle}</p><p className={serviceStyles.description}>{service.description}</p><div className={serviceStyles.actions}><Link href="/en/book-et-moede" className={serviceStyles.primaryBtn}>Book a meeting</Link><Link href="/en/kontakt" className={serviceStyles.secondaryBtn}>Contact us</Link></div></div>
          <div className={serviceStyles.heroImage}><Image src={service.image} alt={`${service.title} illustration`} width={560} height={360} priority /></div>
        </section>
        <section className={serviceStyles.grid}><article className={serviceStyles.card}><h2>What you get</h2><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></article><article className={serviceStyles.card}><h2>How we work</h2><ul>{service.process.map((item) => <li key={item}>{item}</li>)}</ul></article></section>
      </main>
    );
  }

  if (legal) {
    return (
      <main className={legalStyles.wrapper}>
        <h1 className={legalStyles.title}>{legal.title}</h1>
        <p className={legalStyles.meta}>Last updated: {legal.updatedAt || "13 March 2026"}</p>
        {legal.sections.map(([title, text]) => <section className={legalStyles.section} key={title}><h2>{title}</h2><p>{text}</p></section>)}
        <p className={legalStyles.notice}>For questions, contact us at <a href="mailto:kontakt@mrwagency.dk">kontakt@mrwagency.dk</a>.</p>
      </main>
    );
  }

  if (path === "priser") {
    return (
      <main className={pricingStyles.wrapper}>
        <section className={pricingStyles.hero}>
          <p className={pricingStyles.kicker}>Pricing</p>
          <h1>Packages and solutions that make it easy to choose</h1>
          <p className={pricingStyles.lead}>
            Explore our most popular packages. The final price depends on scope, content and features,
            but these ranges are a useful starting point.
          </p>
        </section>
        <section className={pricingStyles.packageGrid}>
          {pricingPackages.map(([name, price, intro, features, extras], index) => (
            <article
              key={name}
              className={`${pricingStyles.packageCard} ${index === 1 ? pricingStyles.featuredCard : ""}`}
            >
              <div className={pricingStyles.packageTop}>
                <span className={pricingStyles.tag}>{name}</span>
                <h2>{price}</h2>
                <p>{intro}</p>
              </div>
              <div><h3>What&apos;s included</h3><ul>{features.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Extras / bonus</h3><ul>{extras.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </section>
        <section className={pricingStyles.section}>
          <div className={pricingStyles.sectionHeading}>
            <p className={pricingStyles.kicker}>Add-ons</p>
            <h2>Add the extras that bring more value</h2>
          </div>
          <div className={pricingStyles.addOnGrid}>
            {[
              ["Logo design", "DKK 1,000–3,000"],
              ["SEO package", "DKK 2,500–5,000"],
              ["Google Ads setup", "DKK 2,000–4,000"],
              ["Extra UGC video", "DKK 750–1,500 per video"],
              ["Social media content plan", "DKK 1,500–3,000"],
            ].map(([name, price]) => (
              <article className={pricingStyles.simpleCard} key={name}><h3>{name}</h3><p>{price}</p></article>
            ))}
          </div>
        </section>
        <section className={pricingStyles.section}>
          <div className={pricingStyles.sectionHeading}>
            <p className={pricingStyles.kicker}>Maintenance</p>
            <h2>Keep your website updated and running smoothly after launch</h2>
            <p>Ongoing support helps keep your website secure, fast and technically up to date.</p>
          </div>
          <div className={pricingStyles.addOnGrid}>
            {[
              ["Basic maintenance", "DKK 499 / month", "Updates, security checks and backups for smaller websites."],
              ["Standard maintenance", "DKK 999 / month", "Updates, backups, performance checks and minor technical fixes."],
              ["Premium maintenance", "DKK 1,499 / month", "Everything in Standard, plus priority support and ongoing advice."],
            ].map(([name, price, description]) => (
              <article className={pricingStyles.simpleCard} key={name}><h3>{name}</h3><strong>{price}</strong><p>{description}</p></article>
            ))}
          </div>
        </section>
        <section className={pricingStyles.noteBox}>
          <div><h2>Need a quote for your project?</h2><p>Let&apos;s define the scope and find the package or combination that best fits your goals.</p></div>
          <Link href="/en/book-et-moede" className={pricingStyles.cta}>Book a meeting</Link>
        </section>
      </main>
    );
  }

  if (path === "portfolio") {
    const projects = [
      {
        name: "salonjozi.dk",
        url: "https://salonjozi.dk",
        preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsalonjozi.dk?w=1200",
        summary: "An inviting salon website designed to make it easy for customers to get in touch.",
      },
      {
        name: "nordjyskkøreskole.dk",
        url: "https://xn--nordjyskkreskole-txb.dk",
        displayUrl: "https://nordjyskkøreskole.dk",
        preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fxn--nordjyskkreskole-txb.dk?w=1200",
        summary: "An informative website focused on clarity, local customers and a professional digital profile.",
      },
      {
        name: "creatorsimod.dk",
        url: "https://creatorsimod.dk",
        preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcreatorsimod.dk?w=1200",
        summary: "A website for Creators i Mod focused on creative content and online visibility.",
      },
    ];
    return (
      <main className={portfolioStyles.wrapper}>
        <section className={portfolioStyles.hero}>
          <p className={portfolioStyles.kicker}>Portfolio</p>
          <h1>Selected websites I&apos;ve built</h1>
          <p>A selection of projects focused on modern design, clear structure and a strong online presence.</p>
        </section>
        <section className={portfolioStyles.grid}>
          {projects.map((project) => (
            <article key={project.name} className={portfolioStyles.card}>
              <div className={portfolioStyles.previewWrap}>
                <div className={portfolioStyles.browserBar}><span /><span /><span /><p>{project.displayUrl || project.url}</p></div>
                <Image src={project.preview} alt={`Preview of ${project.name}`} className={portfolioStyles.previewImage} width={1200} height={750} unoptimized loading="lazy" />
              </div>
              <div className={portfolioStyles.cardBody}>
                <h2>{project.name}</h2><p>{project.summary}</p>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className={portfolioStyles.cta}>Visit website</Link>
              </div>
            </article>
          ))}
        </section>
        <section className={portfolioStyles.ugcSection}>
          <div className={portfolioStyles.ugcHeader}><p className={portfolioStyles.kicker}>UGC work</p><h2>Explore my UGC work</h2></div>
          <article className={`${portfolioStyles.card} ${portfolioStyles.ugcCard}`}>
            <div className={portfolioStyles.ugcCardInner}>
              <span className={portfolioStyles.ugcBadge}>Video portfolio</span>
              <h3>Authentic content with real value</h3>
              <p>Selected UGC content with natural, strong storytelling for social media and brand work.</p>
              <Link href="https://drive.google.com/drive/folders/1SWMxYUNfVIaqOUQqnl_elAZTVUWTORUo?usp=drive_link" target="_blank" rel="noopener noreferrer" className={portfolioStyles.cta}>Watch UGC videos</Link>
            </div>
          </article>
        </section>
      </main>
    );
  }

  if (path === "om-os") {
    return (
      <main className={aboutStyles.wrapper}>
        <section className={aboutStyles.hero}>
          <div className={aboutStyles.heroText}>
            <p className={aboutStyles.kicker}>About MRW Agency</p>
            <h1>Frontend developer, independent partner and creative digital builder</h1>
            <p>
              My name is Morten. I work as an independent frontend developer, creating modern,
              user-friendly digital solutions focused on results. My work in sales has strengthened
              my ability to understand customers, build trust and turn needs into practical solutions.
            </p>
            <p>
              My background combines technical development with service-focused communication. I&apos;ve
              been a content creator since 2012, giving me a strong understanding of visual communication,
              branding and how great content builds engagement and recognition.
            </p>
            <p>
              I care about structure, precision and quality in everything I build. With MRW Agency,
              I create digital solutions that are fast, accessible, technically robust and ready to grow
              with your business.
            </p>
          </div>
          <div className={aboutStyles.heroImageWrap}>
            <Image
              src="/mig.png"
              alt="Morten from MRW Agency"
              width={640}
              height={800}
              className={aboutStyles.heroImage}
              priority
            />
          </div>
        </section>
        <section className={aboutStyles.section}>
          <h2>How it started</h2>
          <div className={aboutStyles.timeline}>
            <article className={aboutStyles.timelineItem}><span>01</span><div><h3>Interest in digital solutions</h3><p>A fascination with design, functionality and technology started the journey towards a career in web development.</p></div></article>
            <article className={aboutStyles.timelineItem}><span>02</span><div><h3>Qualified web developer</h3><p>With a professional foundation in web development, I work methodically with modern tools, performance and user experience.</p></div></article>
            <article className={aboutStyles.timelineItem}><span>03</span><div><h3>Customer service in practice</h3><p>Experience in customer service has deepened my understanding of people and how thoughtful communication builds trust.</p></div></article>
            <article className={aboutStyles.timelineItem}><span>04</span><div><h3>MRW Agency today</h3><p>Today, I build web and content solutions for businesses, with a focus on quality, responsibility and doing every job properly.</p></div></article>
          </div>
        </section>
        <section className={aboutStyles.section}>
          <h2>Explore my work</h2>
          <article className={aboutStyles.showcaseCard}>
            <div><p className={aboutStyles.showcaseLabel}>Selected reference</p><h3>mortenrwinther.dk</h3><p>See an example of my approach to design, structure and digital presentation.</p></div>
            <Link href="https://mortenrwinther.dk" target="_blank" rel="noopener noreferrer" className={aboutStyles.cta}>Visit website</Link>
          </article>
        </section>
      </main>
    );
  }

  if (path === "book-et-moede" || path === "kontakt") {
    const isContact = path === "kontakt";
    return <main className={legalStyles.wrapper}><h1 className={legalStyles.title}>{isContact ? "Contact" : "Book a meeting"}</h1><p className={legalStyles.meta}>{isContact ? "We&apos;d love to hear about your project" : "Let&apos;s talk about your business and project"}</p><section className={legalStyles.section}>{isContact ? <><p>Email: kontakt@mrwagency.dk</p><p>Phone: +45 30 25 03 44</p><p>CVR: 44231662</p></> : <p>Fill in the form below and we&apos;ll get back to you with a suggested next step and a time that suits you.</p>}</section><section className={legalStyles.section}><ContactForm /></section></main>;
  }

  if (path === "faq") {
    const questions = [
      ["What does MRW Agency do?", "We help with web design, development, SEO, branding and social media content creation, through both one-off projects and ongoing partnerships."],
      ["How does a project start?", "We usually begin with a meeting to discuss goals, audience, budget and timeline. You'll then receive a clear proposal."],
      ["How much does a website cost?", "It depends on the features, design and integrations. We provide a clear estimate and can split the work into stages."],
      ["How long does a project take?", "Smaller websites can often be delivered within a few weeks. Larger projects take longer depending on scope and timely approvals."],
      ["Do you create social media content?", "Yes. We produce posts, graphics, videos and content plans to keep your brand consistent across channels."],
      ["Who owns the finished work?", "Unless agreed otherwise, rights transfer to the customer once full payment has been made. Third-party licences remain subject to their terms."],
      ["Do you offer maintenance?", "Yes. We offer support, updates, security maintenance and further development after launch."],
      ["How do you handle personal data and cookies?", "We follow applicable Danish and EU rules. See our privacy and cookie policies for details."],
      ["Can we agree on a monthly retainer?", "Yes. We offer ongoing partnerships with a defined number of hours or deliverables each month."],
      ["How can we contact you?", "Email kontakt@mrwagency.dk or book a meeting. We'll get back to you as soon as possible."],
    ];
    return <main className={legalStyles.wrapper}><h1 className={legalStyles.title}>FAQ</h1><p className={legalStyles.meta}>Frequently asked questions about working with MRW Agency</p><section className={legalStyles.faqAccordion}>{questions.map(([question, answer]) => <details key={question} className={legalStyles.faqItem}><summary className={legalStyles.faqQuestion}>{question}</summary><p className={legalStyles.faqAnswer}>{answer}</p></details>)}</section><p className={legalStyles.notice}>Have another question? <Link href="/en/kontakt">Get in touch</Link>.</p></main>;
  }

  if (path === "content-creation") {
    return (
      <main className={contentStyles.wrapper}>
        <section className={contentStyles.hero}>
          <div className={contentStyles.heroContent}>
            <p className={contentStyles.kicker}>UGC & organic marketing</p>
            <h1>Content that makes your business more credible, visible and relevant</h1>
            <p className={contentStyles.heroText}>
              MRW Agency helps businesses create content that builds engagement and recognition without
              compromising quality or professionalism. The goal is to make your brand more human,
              trustworthy and appealing to the right audience.
            </p>
            <div className={contentStyles.ctas}><Link href="/en/book-et-moede" className={contentStyles.primary}>Book a call</Link></div>
            <div className={contentStyles.heroStats}>
              <div><strong>UGC-focused</strong><span>Content for social media, advertising and brand building.</span></div>
              <div><strong>Organic first</strong><span>A setup where content builds trust and demand over time.</span></div>
              <div><strong>Knowledge transfer</strong><span>We can help your team learn to create content in-house.</span></div>
            </div>
          </div>
          <aside className={contentStyles.heroPanel}>
            <p className={contentStyles.panelKicker}>What this is about</p>
            <h2>A more intentional and professional approach to content</h2>
            <p>Content should be more than frequent. It should be targeted, credible and shaped around your identity and audience.</p>
            <div className={contentStyles.panelList}>
              {[
                "Short-form video with a natural, professional feel",
                "Content that strengthens brand identity and recognition",
                "Strategic content for visibility without feeling pushy",
                "A consistent content approach you can build on",
              ].map((item) => <div key={item} className={contentStyles.panelItem}><span /><p>{item}</p></div>)}
            </div>
          </aside>
        </section>
        <section className={contentStyles.section}>
          <div className={contentStyles.sectionHeading}><h2>What organic content can do for you</h2><p>Clear, credible content helps people recognise, understand and choose your business.</p></div>
          <div className={contentStyles.serviceGrid}>
            <article className={contentStyles.serviceCard}><h3>Increase visibility without sounding salesy</h3><p>Make your business easier to recognise, understand and choose without feeling overly promotional.</p></article>
            <article className={contentStyles.serviceCard}><h3>Build trust and strengthen your brand</h3><p>Consistent, authentic content creates trust and a clearer picture of who you are and what you stand for.</p></article>
            <article className={contentStyles.serviceCard}><h3>Create a better content routine</h3><p>Build a practical process for creating professional content regularly over time.</p></article>
          </div>
        </section>
        <section className={contentStyles.section}>
          <div className={contentStyles.sectionHeading}><h2>Your content partner</h2><p>From a one-off project to an ongoing partnership, we can build a more consistent content routine.</p></div>
          <div className={contentStyles.serviceGrid}>
            <article className={contentStyles.serviceCard}><h3>UGC and short-form video</h3><p>Natural, personal social content that feels authentic and works as a strong brand tool.</p></article>
            <article className={contentStyles.serviceCard}><h3>Organic brand building</h3><p>Strategic content that strengthens your voice, relationships and online presence.</p></article>
            <article className={contentStyles.serviceCard}><h3>Content structure and support</h3><p>A system for creating content efficiently, with clear direction across campaigns.</p></article>
          </div>
        </section>
        <section className={contentStyles.section}>
          <div className={contentStyles.sectionHeading}><h2>How we work with content</h2><p>A process for businesses looking for a clearer strategy, consistent content and a professional approach.</p></div>
          <div className={contentStyles.processGrid}>
            <article className={contentStyles.processCard}><span>01</span><h3>Clear direction</h3><p>We define goals, audience, tone and topics that matter to your business.</p></article>
            <article className={contentStyles.processCard}><span>02</span><h3>Content and production</h3><p>We create useful, visually strong content designed to feel credible and engaging.</p></article>
            <article className={contentStyles.processCard}><span>03</span><h3>Review and optimisation</h3><p>We learn what works and improve the process to make it more effective.</p></article>
          </div>
        </section>
        <section className={contentStyles.section}>
          <div className={contentStyles.sectionHeading}><h2>A solution that grows with your business</h2><p>Whether you start with a simple package or build a long-term strategy, we can create a realistic, scalable setup.</p></div>
          <div className={contentStyles.partnerGrid}>
            <article className={contentStyles.partnerCard}><h3>Who it is for</h3><p>Businesses that want more human marketing and a brand people genuinely connect with.</p></article>
            <article className={contentStyles.partnerCard}><h3>Where we can start</h3><p>With a UGC setup, a content plan or a partnership where we produce content and help your team continue in-house.</p></article>
          </div>
        </section>
        <section className={contentStyles.ctaSection}>
          <div><h2>Want content that feels more authentic?</h2><p>Let&apos;s build a solution that makes your business more credible and better at building meaningful relationships.</p></div>
          <Link href="/en/book-et-moede" className={contentStyles.ctaButton}>Book a meeting</Link>
        </section>
      </main>
    );
  }

  if (path === "sporgeskema") {
    return <main className={legalStyles.wrapper}><LeadQuiz /></main>;
  }

  if (path === "tak-for-din-henvendelse") {
    return <main className={legalStyles.wrapper}><h1 className={legalStyles.title}>Thank you for your enquiry</h1><p className={legalStyles.meta}>We&apos;ve received your message and will get back to you as soon as possible.</p><section className={legalStyles.section}><p>You&apos;ll receive a reply from <strong>kontakt@mrwagency.dk</strong>. If your enquiry is urgent, call +45 30 25 03 44.</p><p><Link href="/en">Back to home</Link></p></section></main>;
  }

  notFound();
}
