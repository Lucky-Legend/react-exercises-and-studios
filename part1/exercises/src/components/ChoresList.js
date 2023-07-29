import React from "react";
import styles from "./ChoresList.module.css";

export default function ChoresList () {
   return (
      <div className={styles.container}>
         <h3 className={styles.choresHeading}>List of Chores</h3>
         <ol className={styles.choresText}>
            <li>Take out the trash</li>
            <li>Fix anything broken</li>
            <li>Cut the grass</li>
         </ol>
      </div>
   );
}