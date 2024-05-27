import styles from "./Header.module.css";
import Card from "../UI/Card/Card";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <>
      <Card className={"headerCard"}>
        <Link to="/" className={styles.headerLink}>
          <h1 className={styles.appTitle}>{title}</h1>
        </Link>
        <p className={styles.paragraphHeader}>
          (we apologise <em className={styles.paragraphEm}>sincerily</em> for
          the swearing)
        </p>
      </Card>
    </>
  );
}
