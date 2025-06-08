import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCampers} from '../../redux/campersSlice';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import CamperList from '../../components/CamperList/CamperList';


function Catalog() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadCampers());
    }, [dispatch]);

    return (
        <div style={{display: "flex", gap: "2rem", padding: "2rem"}}>
            <FilterPanel />
            <CamperList />
        </div>
    )
}
export default Catalog;