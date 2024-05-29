import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../UI/ListItem/ListItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <ListItem key="starIcon">
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
              className={styles.navIcons}
            />
          </ListItem>
          <ListItem key="addIcon">
            <Link to="/addTask">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2x"
                beatFade
                className={styles.navIcons}
                color="yellow"
              />
            </Link>
          </ListItem>
          <ListItem key="searchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
              className={styles.navIcons}
            />
          </ListItem>
        </ul>
      </nav>
    </>
  );
}
