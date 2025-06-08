import { useState } from "react";
import styles from './Tabs.module.css';




const Tabs =({onTabChange}) => {
    const [activeTab, setActiveTab] = useState('Features');

    const handleClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    }

    return (
        <div className={styles.tabs}>
            {['Features', 'Reviews', 'Booking'].map(tab => (
                <button
                key={tab}
                className={activeTab === tab ? styles.active : styles.tab}
                onClick={() => handleClick(tab)}
                >
                    {tab}

                </button>
            ))}
        </div>
    )
}

export default Tabs;