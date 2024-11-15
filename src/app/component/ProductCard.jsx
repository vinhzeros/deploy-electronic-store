import React from 'react';
import Link from 'next/link';

function ProductCard(props) {
  return (
    <>
      {props.data.map((product) => {
        const {  _id ,name, image, price} = product;
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 my-3 " key={_id}>
            <div className="card position-relative p-1">
              <img
                className="card-img-top mt-2"
                src={`http://localhost:3000/img/${image}`} 
                height="240px"
                alt={name}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-success">{name}</h5>
                <p className="text-danger m-0"><b>Giá: {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</b></p>
                <div className="text-center">
                  <Link href={`detail/${_id}`} className="btn btn-warning text-white mt-2" >Xem chi tiết</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;