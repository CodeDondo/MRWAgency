import LeadQuiz from "../components/LeadQuiz/LeadQuiz";
import styles from "./sporgeskema.module.css";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Projektspørgeskema",
  description: "Beskriv din virksomhed og dine behov, og få et konkret forslag til den rette digitale løsning.",
  path: "/sporgeskema",
});

export default function SporgeskemaPage() {
  return (
    <main className={styles.page}>
      <LeadQuiz />
    </main>
  );
}
