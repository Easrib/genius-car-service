import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, _id } = service
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price={price}</p>
            <p><small>Description: {description}</small></p>
            <button onClick={() => navigateToServiceDetail(_id)}>Book {name}</button>
        </div>
    );
};

export default Service;