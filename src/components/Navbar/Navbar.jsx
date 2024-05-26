import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../UI/ListItem/ListItem";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              onClick={() => setIsOpen(true)}
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
      {isOpen &&
        createPortal(<Modal closeModal={() => setIsOpen(false)} />, document.body)}
    </>
  );
}
