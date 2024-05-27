import styles from './Label.module.css'

export default function Label({ htmlFor, ariaLabel, className, title }) {
  return (
    <label
      htmlFor={htmlFor}
      aria-label={ariaLabel}
      className={styles[className]}
    >
      {title}
    </label>
  );
}
