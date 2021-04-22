import styles from "../styles/Home.module.css"

export const Card = ({ link, title, description }) => (
  <a href={link} className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
  </a>
)
