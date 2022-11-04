import React from 'react';

const ServieceCard = ({ serve }) => {
    const { img, title, price } = serve;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>
                <div className='flex justify-between'>
                    <div className="text-xl font-bold text-orange-600">Price : ${price}</div>
                    <button className="btn btn-primary">Buy</button>
                </div>


            </div>
        </div>
    );
};

export default ServieceCard;