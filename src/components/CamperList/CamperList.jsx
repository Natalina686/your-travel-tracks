import { useSelector } from "react-redux";
import CamperCard from '../CamperCard/CamperCard';
import styles from './CamperList.module.css';

const applyFilters = (campers = [], filters) => {
    if (!Array.isArray(campers)) return [];
    

    return campers.filter(camper => {
        if (filters.location && !camper.location.toLowerCase().includes(filters.location.toLowerCase())) {
            return false;
        }

        if (filters.form && camper.form !== filters.form) {
            return false;
        }

        for (const item of filters.equipment) {
            if (!camper[item])
                return false;
        }
        return true;
    })
}

const CamperList = () => {

 const campers = useSelector(state => state.campers.items);

    const status = useSelector(state => state.campers.status);
    const filters = useSelector(state => state.filters);


    const filteredCampers = applyFilters(campers, filters);

    if (status === 'loading') {
        return <p>Loading campers...</p>
    }

    if (status === 'failed') {
        return <p>Failed to load campers. Try again later.</p>;
    }

    if (filteredCampers.length === 0) {
        return <p>No campers found with selected filters.</p>
    }

    return (
        <div className={styles.list}>
            {filteredCampers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
            ))}

        </div>
    )
}

export default CamperList;