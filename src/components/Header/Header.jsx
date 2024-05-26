import styles from "./Header.module.css";
import Card from "../UI/Card/Card";

export default function Header({ title }) {
  return (
    <>
      <Card className={"headerCard"}>
        <h1 className={styles.appTitle}>{title}</h1>
        <p className={styles.paragraphHeader}>
          (we apologise <em className={styles.paragraphEm}>sincerily</em> for the swearing)
        </p>
      </Card>
    </>
  );
}
