import styles from "./Greeting.module.scss";

export default function Greeting({ name }) {
  return <h1 className={styles["greeting"]}>Hello {name} 👋,</h1>;
}
