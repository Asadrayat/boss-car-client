import React from 'react';
import { Link } from 'react-router-dom';

const ServieceCard = ({ serve }) => {
    const { _id, img, title, price } = serve;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>
                <div className='flex justify-between'>
                    <div className="text-xl font-bold text-orange-600">Price : ${price}</div>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Buy</button></Link>
                </div>


            </div>
        </div>
    );
};

export default ServieceCard;