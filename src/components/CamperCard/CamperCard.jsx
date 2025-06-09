import React, {useState} from "react";
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

const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });

    const isFavorite = favorites.includes(id);


const handleShowMore = () => {
    navigate(`/catalog/${id}`);
}

const toggleFavorite = () => {
        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter(favId => favId !== id);
        } else {
            updatedFavorites = [...favorites, id];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    return (
        <div className={styles.card}>
            <img src={gallery?.[0]?.thumb} alt={name} 
            className={styles.image}/>

            
                <div className={styles.header}>
                    <h2 className={styles.title}>{name}</h2>
                    <span className={styles.price}>€{price.toFixed(2)}</span>
                    <button
                    onClick={toggleFavorite}
                    aria-label="Toggle favorite"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        color: isFavorite ? 'red' : 'gray',
                        marginLeft: 'auto'
                    }}
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
                    
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