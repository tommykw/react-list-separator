import { withSeparators } from "react-list-separator";
import styles from "./page.module.css";

export default function Home() {
  const list = [
    <div className={styles.item}>Item 1</div>,
    <div className={styles.item}>Item 2</div>,
    <div className={styles.item}>Item 3</div>
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Sample</h1>
      <div className={styles.listContainer}>
        {withSeparators(list).separatedBy(<div className={styles.separator}>✦</div>)}
      </div>
    </main>
  );
}
