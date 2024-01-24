import styles from "./CustomersPanel.module.scss";
import { Search } from "../Search";
import { CustomersTable } from "../CustomersTable";
import { Pagination } from "../Pagination";

export default function CustomersPanel({ customers }) {
  return (
    <div className={styles["panel--container"]}>
      <div className={styles["panel--upper-nav"]}>
        <div className={styles["panel--upper-nav-text"]}>
          <h1 className={styles["panel--title"]}>All Customers</h1>
          <p className={styles["panel--description"]}>Active Members</p>
        </div>
        <Search />
      </div>
      <CustomersTable customers={customers} />
      <div className={styles["panel--footer"]}>
        <p className={styles["panel--info-data"]}>
          Showing data 1 to 8 of 256K entries
        </p>
        <Pagination pagesCount={40} />
      </div>
    </div>
  );
}
