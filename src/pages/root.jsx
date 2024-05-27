import styles from "../styles/pages.module.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/UI/Container/Container";

function Root() {
  return (
    <div className={styles.root}>
      <Header title={"shit to do"} />
      <Container className={"mainContainer"}>
        <Outlet />
      </Container>
      <Navbar />
    </div>
  );
}

export default Root;
