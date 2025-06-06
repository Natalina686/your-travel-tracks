import React from "react";
import { useParams } from 'react-router-dom';

function CamperDetails() {
    const {id} = useParams();
    return <h1>CamperDetails: {id}</h1>
}

export default CamperDetails;