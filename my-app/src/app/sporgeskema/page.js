import LeadQuiz from "../components/LeadQuiz/LeadQuiz";
import styles from "./sporgeskema.module.css";

export default function SporgeskemaPage() {
  return (
    <main className={styles.page}>
      <LeadQuiz />
    </main>
  );
}
