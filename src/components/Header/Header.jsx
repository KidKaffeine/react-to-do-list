import styles from "./Header.module.css";
import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <>
      <Container className={"headerContainer"}>
        <Link to="/" className={styles.headerLink}>
          <h1 className={styles.appTitle}>{title}</h1>
        </Link>
        <p className={styles.paragraphHeader}>
          (we apologise <em className={styles.paragraphEm}>sincerily</em> for
          the swearing)
        </p>
      </Container>
    </>
  );
}
