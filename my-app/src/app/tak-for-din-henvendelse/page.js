import Link from "next/link";
import styles from "../legal.module.css";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Tak for din henvendelse",
  description: "Din besked er modtaget, og vi vender hurtigt tilbage.",
  path: "/tak-for-din-henvendelse",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Tak for din henvendelse</h1>
      <p className={styles.meta}>Vi har modtaget din besked og kontakter dig hurtigst muligt.</p>

      <section className={styles.section}>
        <p>
          Du kan forvente svar på email fra <strong>kontakt@mrwagency.dk</strong>. Hvis din henvendelse haster,
          kan du også ringe på +45 30 25 03 44.
        </p>
      </section>

      <section className={styles.section}>
        <p>
          <Link href="/">Tilbage til forsiden</Link>
        </p>
      </section>
    </main>
  );
}
