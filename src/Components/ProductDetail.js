import React from "react";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const {id} = useParams();
    return(
        <h1>This is Student detail of {id}</h1>
    )
}

export default ProductDetail;