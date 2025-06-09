import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCampers} from '../../redux/campersSlice';
import { useSelector } from "react-redux";
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import CamperList from '../../components/CamperList/CamperList';



function Catalog() {
    const dispatch = useDispatch();

const filters = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(loadCampers());
    }, [dispatch, filters]);

    return (
        <div style={{display: "flex", gap: "2rem", padding: "2rem"}}>
            <FilterPanel />
            <CamperList />
        </div>
    )
}
export default Catalog;