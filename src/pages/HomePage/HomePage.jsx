import React from "react";
import styles from './HomePage.module.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/catalog');
    };

    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <h1 className={styles.title}>Campers of your dreams</h1>
                <p className={styles.paragraph}>You can find everything you want in our catalog</p>
                <button className={styles.ctaButton} onClick={handleClick}>
                    View Now
                </button>

            </div>

        </section>
    )
}



export default HomePage;