import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCampers} from '../../redux/campersSlice';
import CamperCard from "../../components/CamperCard/CamperCard";

function Catalog() {

    
    const dispatch = useDispatch();
   
;
    const { items, status, error } = useSelector((state) => state.campers);


    useEffect(() => {
        dispatch(loadCampers());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Catalog</h1>
            (Array.isArray(items) ? items : []).map(...)


            {items.map((camper) => (
                <div key={camper.id}>
                    <h3>{camper.name}</h3>
                    <p>Price: {Number(camper.price).toLocaleString('en-US', {minimumFractionDigits: 2})}</p>

                </div>
            ))}
        </div>
    )
}
export default Catalog;