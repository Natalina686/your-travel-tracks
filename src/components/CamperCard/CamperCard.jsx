import React from "react";
import styles from './CamperCard.module.css';

function CamperCard({ camper }) {
const {
    name,
    price,
    location,
    rating,
    description,
    gallery,
} = camper;

    return (
        <div className={styles.card}>
            <img src={gallery?.[0]?.thumb} alt={name} 
            className={styles.image}/>

            
                <div className={styles.header}>
                    <h2 className={styles.title}>{name}</h2>
                    <span className={styles.price}>{price.toLocaleString('en-US')},00€</span>
                </div>
                <div className={styles.meta}>
                    <span className={styles.location}>{location}</span>
                    <span className={styles.rating}>
                        
    <span role="img" aria-label="star">⭐</span> {rating}
  </span>
                </div>
                <p className={styles.description}>{description}</p>
                <button className={styles.button}>Show more</button>

            </div>
        
    )
}
export default CamperCard;