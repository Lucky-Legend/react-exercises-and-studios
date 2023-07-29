import React from "react";
import styles from "./BookList.module.css";

export default function BookList() {
   let pageTitle = "Personal Library Shelf";
   let book1 = "https://upload.wikimedia.org/wikipedia/commons/c/c3/1984first.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/commons/6/61/Huckleberry_Finn_book.JPG";
   let book3 = "https://upload.wikimedia.org/wikipedia/commons/b/ba/Title_page_first_edition_Don_Quijote.jpg";

   return (
      <div>
         <h3 className={styles.bookHeading}>{pageTitle}</h3>
         <div className={styles.bookContent}>
            <img src={book1} className={styles.imgSize} alt="Government is everything!" />
            <img src={book2} className={styles.imgSize} alt="19th Century tale of a midwestern boy." />
            <img src={book3} className={styles.imgSize} alt="A delusional but chivalrous knight's quests!" />
         </div>
      </div>      
   );
}