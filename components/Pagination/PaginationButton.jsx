import styles from "./PaginationButton.module.scss";

export default function PaginationButton({ content, active }) {
  return (
    <div
      className={active ? styles["button-active"] : styles["button-inactive"]}
    >
      {content}
    </div>
  );
}
