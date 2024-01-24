import styles from "./Pagination.module.scss";
import PaginationButton from "./PaginationButton";

export default function Pagination({ pagesCount }) {
  return (
    <div className={styles["pagination"]}>
      <PaginationButton content={"<"} />
      <PaginationButton content={"1"} active />
      {[2, 3, 4].map((page, i) => (
        <PaginationButton key={i} content={page} />
      ))}
      <div className={styles["pagination--spacer"]}>...</div>
      <PaginationButton content={pagesCount} />
      <PaginationButton content={">"} />
    </div>
  );
}
