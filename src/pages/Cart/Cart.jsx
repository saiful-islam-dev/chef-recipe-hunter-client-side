import React from 'react';

const Cart = () => {
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              {/* <img className="p-6 rounded-lg" src={data.picture} alt="Shoes" /> */}
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Cart;