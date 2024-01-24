import styles from "./Status.module.scss";

export default function Status({ status }) {
  return (
    <div
      className={
        status == "Active" ? styles["status-active"] : styles["status-inactive"]
      }
    >
      {status}
    </div>
  );
}
