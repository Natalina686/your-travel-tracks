import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setForm, setEquipment, resetFilters } from '../../redux/filtersSlice';
import styles from './FilterPanel.module.css';


const FilterPanel = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const handleLocationChange = e => {
        dispatch(setLocation(e.target.value));
    }

    const handleFormChange = e => {
        dispatch(setForm(e.target.value));
    }

    const handleEquipmentChange = e => {
        const value = e.target.value;
        const checked = e.target.checked;
        const newEquipment = checked
        ? [...filters.equipment, value]
        : filters.equipment.filter(item => item !== value);
        dispatch(setEquipment(newEquipment));
    };

    const handleReset = () => {
        dispatch(resetFilters());
    };

    return (
        <div className={styles.filters}>
            <label>
                Location:
                <input type="text" value={filters.location} onChange={handleLocationChange} />
            </label>

            <label>
                Form:
                <select value={filters.form} onChange={handleFormChange}>
                    <option value="">All</option>
                    <option value="panelTruck">Panel Truck</option>
                    <option value="alcove">Alcove</option>
                    <option value="van">Van</option>
                </select>
            </label>

            <fieldset>
                <legend>Equipment:</legend>
                <label>
                    <input
                    type="checkbox"
                    value="AC"
                    checked={filters.equipment.includes('AC')}
                    onChange={handleEquipmentChange}
                    />
                    Air Conditioning
                </label>
                <label>
                    <input type="checkbox"
                    value="kitchen"
                    checked={filters.equipment.includes('kitchen')}
                    onChange={handleEquipmentChange} />
                    Kitchen
                </label>
                <label>
                    <input type="checkbox"
                    value="TV"
                    checked={filters.equipment.includes('TV')}
                    onChange={handleEquipmentChange} />
                    TV
                </label>
            </fieldset>

            <button onClick={handleReset}>Reset filters</button>

        </div>
    )

}
export default FilterPanel;