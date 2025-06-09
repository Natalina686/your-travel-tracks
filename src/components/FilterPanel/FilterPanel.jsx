import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setForm, setEquipment, resetFilters } from '../../redux/filtersSlice';
import styles from './FilterPanel.module.css';
import vanIcon from '../../assets/van.svg';
import fullyIntegratedIcon from '../../assets/fullyIntegrated.svg';
import alcoveIcon from '../../assets/alcove.svg';
import acIcon from '../../assets/ac.svg';
import kitchenIcon from '../../assets/kitchen.svg';
import tvIcon from '../../assets/tv.svg';
import automaticIcon from '../../assets/automatic.svg';
import bathroomIcon from '../../assets/bathroom.svg';



const equipmentOptions = [
  { value: 'AC', label: 'AC', icon: <img src={acIcon} alt="AC" /> },
  { value: 'automatic', label: 'Automatic', icon: <img src={automaticIcon} alt="Automatic" /> },
  { value: 'kitchen', label: 'Kitchen', icon: <img src={kitchenIcon} alt="Kitchen" /> },
  { value: 'TV', label: 'TV', icon: <img src={tvIcon} alt="TV" /> },
  { value: 'bathroom', label: 'Bathroom', icon: <img src={bathroomIcon} alt="Bathroom" /> },
];

const FilterPanel = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const handleLocationChange = e => {
        dispatch(setLocation(e.target.value));
    }


    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <div className={styles.filters}>
            <label className={styles.sectionTitle}>
                Location:
                <input type="text" value={filters.location} onChange={handleLocationChange} placeholder=" Enter location"
    className={styles.filterInput }/>
            </label>
Filters:
            <div className={styles.vehicleTypeGroup}>
    <p className={styles.sectionTitle}>Vehicle type</p>
    <div className={styles.buttonGroup}>
        <button
            type="button"
            className={`${styles.filterButton} ${filters.form === 'panelTruck' ? styles.active : ''}`}
            onClick={() => dispatch(setForm('panelTruck'))}
        >
           <img src={vanIcon} alt="Van icon" className={styles.icon} />
  
  <span>Van</span>
        </button>
        <button
            type="button"
            className={`${styles.filterButton} ${filters.form === 'fullyIntegrated' ? styles.active : ''}`}
            onClick={() => dispatch(setForm('fullyIntegrated'))}
        >
            <img src={fullyIntegratedIcon} alt="Fully Integrated" />
            Fully Integrated
        </button>
        <button
            type="button"
            className={`${styles.filterButton} ${filters.form === 'alcove' ? styles.active : ''}`}
            onClick={() => dispatch(setForm('alcove'))}
        >
            <img src={alcoveIcon} alt="Alcove" />
            Alcove
        </button>
    </div>
</div>

            <div className={styles.equipmentSection}>
  <p className={styles.sectionTitle}>Vehicle equipment</p>
  <div className={styles.equipmentButtons}>
    {equipmentOptions.map(option => (
      <button
        key={option.value}
        type="button"
        className={`${styles.equipmentBtn} ${filters.equipment.includes(option.value) ? styles.active : ''}`}
        onClick={() => {
          const newEquipment = filters.equipment.includes(option.value)
            ? filters.equipment.filter(item => item !== option.value)
            : [...filters.equipment, option.value];
          dispatch(setEquipment(newEquipment));
        }}
      >
        {option.icon}
        <span>{option.label}</span>
      </button>
    ))}
  </div>
</div>

            <button className={styles.button} onClick={handleReset}>Reset filters</button>

        </div>
    )

}
export default FilterPanel;