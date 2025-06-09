
import styles from './Tabs.module.css';




const Tabs =({ activeTab, onTabChange}) => {
   

    return (
        <div className={styles.tabs}>
            {['Features', 'Reviews'].map(tab => (
                <button
                key={tab}
                className={activeTab === tab ? styles.active : styles.tab}
                onClick={() => onTabChange(tab)}
                >
                    {tab}

                </button>
            ))}
        </div>
    )
}

export default Tabs;