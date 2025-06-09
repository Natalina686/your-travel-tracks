import { useSelector } from "react-redux";
import CamperCard from '../CamperCard/CamperCard';
import styles from './CamperList.module.css';


const CamperList = () => {

 const campers = useSelector(state => state.campers.items);

    const status = useSelector(state => state.campers.status);

    if (status === 'loading') {
        return <p>Loading campers...</p>
    }

    if (status === 'failed') {
        return <p>Failed to load campers. Try again later.</p>;
    }

    if (campers.length === 0) {
        return <p>No campers found with selected filters.</p>
    }

    return (
        <div className={styles.list}>
            {campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
            ))}

        </div>
    )
}

export default CamperList;