import styles from "./CustomersTable.module.scss";
import { Status } from "../Status";

export default function CustomersTable({ customers }) {
  return (
    <div className={styles["table--container"]}>
      <div className={styles["spacer-wide"]}></div>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["table--titles"]}>
            <th>Customers Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th className={styles["table--status-column"]}>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, i) => {
            return (
              <>
                <tr key={i}>
                  <td className={styles["table--field"]}>{customer.name}</td>
                  <td className={styles["table--field"]}>{customer.company}</td>
                  <td className={styles["table--field"]}>{customer.number}</td>
                  <td className={styles["table--field"]}>{customer.email}</td>
                  <td className={styles["table--field"]}>{customer.country}</td>
                  <td className={styles["table--field"]}>
                    <Status status={customer.status} />
                  </td>
                </tr>
                <tr key={i}>
                  <td className={styles["spacer"]} colSpan="6"></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
