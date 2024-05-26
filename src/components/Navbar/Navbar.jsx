import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faStar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../UI/ListItem/ListItem";

export default function Navbar() {


  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <ListItem key="starIcon">
            <FontAwesomeIcon
              icon={faStar}
              size="3x"
              className={styles.navIcons}
            />
          </ListItem>
          <ListItem key="addIcon">
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="3x"
              beatFade
              className={styles.navIcons}
              color="yellow"
            />
          </ListItem>
          <ListItem key="searchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="3x"
              className={styles.navIcons}
            />
          </ListItem>
        </ul>
      </nav>
    </>
  );
}
