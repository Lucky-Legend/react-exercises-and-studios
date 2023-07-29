import React from "react";
import styles from "./HobbyLinks.module.css"
export default function HobbyLinks() {
    let hobbies = ["https://news.ycombinator.com/", "https://vietnam.travel/places-to-go/southern-vietnam"];
    
    return (
        <div>
            <h3 className={styles.hobbyHeader}>Hobbies</h3>
            <div>
                <ul className={styles.hobbyText}>
                    <li><a href={hobbies[0]} type="button">Latest in Programming news.</a></li>
                    <li><a href={hobbies[1]} type="button">Travel to Vietnam.</a></li>
                </ul>
            </div>
        </div>
    )
}