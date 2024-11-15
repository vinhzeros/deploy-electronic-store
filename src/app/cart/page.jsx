'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '@/redux/slices/cartslice';
import { useMemo } from 'react';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart?.items) || [];
    const dispatch = useDispatch();

    // Tính tổng tiền
    const total = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems]);

    // Xử lý thanh toán với MoMo
    const handlePayment = async () => {
        try {
            // Gửi yêu cầu đến API để tạo phiên thanh toán với MoMo
            const response = await fetch('http://localhost:3000/momo-payment', { // Thay đổi endpoint cho phù hợp với MoMo
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        id: item._id,
                        name: item.name,
                        image: item.image,
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    totalAmount: total, // Tổng tiền gửi lên backend
                }),
            });

            if (!response.ok) {
                throw new Error('Không thể tạo phiên thanh toán với MoMo');
            }

            const { payUrl } = await response.json();

            // Chuyển hướng người dùng đến trang thanh toán của MoMo
            window.location.href = payUrl;
        } catch (error) {
            console.error(error);
            alert('Đã có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại sau.');
        }
    };


    return (
        <div className="container mt-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col">Xóa</th>
                        <th scope="col">Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>
                                <div className="col-6 px-4">
                                    <img src={`http://localhost:3000/img/${item.image}`} width='150px' alt={item.name} />
                                </div>
                            </td>
                            <td>
                                <input
                                    min="1"
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => dispatch(updateCartItemQuantity({ _id: item._id, quantity: parseInt(e.target.value) }))}
                                />
                            </td>
                            <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                            <td>{(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item._id))}>
                                    Xóa
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={() => dispatch(updateCartItemQuantity(item._id))}>
                                    Sửa
                                </button>
                            </td>
                        </tr>
                    ))}

                    <tr className='table-primary'>
                        <td colSpan="3">Tổng cộng</td>
                        <td>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                        <td>
                            <button className="btn btn-success" onClick={handlePayment}>
                                Thanh toán
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CartPage;