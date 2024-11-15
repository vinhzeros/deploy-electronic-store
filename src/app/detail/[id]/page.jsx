"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartslice";
import { useState } from "react";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailPage({ params }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    const { data: product, error, isLoading } = useSWR(`http://localhost:3000/productdetail/${params.id}`, fetcher,
    {
       refreshInterval: 6000,
    }
    );

   if (error) return <div>Lỗi load dữ liệu.</div>;
   if (isLoading) return <div>Đang tải</div>;

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-6 px-4">
                    <img className="img-fluid" src={`http://localhost:3000/img/${product.image}`} />
                </div>
                <div className="col-6">
                    <h3>Chi tiết sản phẩm</h3>
                    <h4>{product.name}</h4>
                    <p>Giá khởi điểm: {product.price}</p>
                    <input className="form-control w-25" min="1" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button className="btn btn-primary my-2" onClick={() => dispatch(addToCart({ item: product, quantity: quantity }))}>
                        Thêm vào giỏ hàng
                    </button>
                    <h4>Mô tả: </h4>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};