import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './CamperCard.module.css';

function CamperCard({ camper }) {
    const navigate = useNavigate();
const {
    id,
    name,
    price,
    location,
    rating,
    description,
    gallery,
} = camper;

const handleShowMore = () => {
    navigate(`/catalog/${id}`);
}

    return (
        <div className={styles.card}>
            <img src={gallery?.[0]?.thumb} alt={name} 
            className={styles.image}/>

            
                <div className={styles.header}>
                    <h2 className={styles.title}>{name}</h2>
                    <span className={styles.price}>€{price.toFixed(2)}</span>
                    
                </div>
                <div className={styles.meta}>
                    <span className={styles.location}>{location}</span>
                    <span className={styles.rating}>
                        
    <span role="img" aria-label="star">⭐</span> {rating}
  </span>
                </div>
                <p className={styles.description}>{description}</p>
                <button className={styles.button} onClick={handleShowMore}>Show more</button>

            </div>
        
    )
}
export default CamperCard;