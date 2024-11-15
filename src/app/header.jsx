"use client";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='));
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div>
            <header className="sticky-top bg-info border">
                { <div className="bg-danger d-none d-sm-block">
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-md-6 pt-3">
                                <p className="text-white fs-6"><img src="https://file.hstatic.net/1000402464/file/output-onlinegiftools_9bbbf15c266044699bca3a5635e05246.gif" width="30px" alt="" /> Giao hàng tận nơi miễn phí lắp đặt</p>
                            </div>
                            <div className="col-md-6 pt-3 d-flex align-items-end justify-content-end">
                                <p><i className="bi bi-telephone-fill me"></i> HOTLINE: 0987654321 </p>
                            </div>
                        </div>
                    </div>
                </div> }
                <div className=" bg-info container p-2 d-flex justify-content-between align-items-center">
                    <nav className="navbar navbar-expand-lg bg-info ">
                        <div className="container px-0 mx-0">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                              <img src="/glorystore/public/img/Electronic-removebg-preview.png" alt="" />  <a className="navbar-brand" href="/"><span className="text-danger">Electronic Store</span></a>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href='/'>Trang Chủ</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href='/about'>Giới thiệu</Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" href="/product">Sản Phẩm </Link>

                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" >Tin Tức</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" >Liên hệ</a>
                                    </li>
                                </ul>
                                <form className="d-flex ms-4 " action="/search">
                                    <input className="form-control me-2" name="keyword" placeholder="Nhập tên sản phẩm" />
                                    <button className="btn btn-success" type="submit" >Tìm</button>
                                </form>

                            </div>
                        </div>
                    </nav>
                    <div className="d-flex align-items-center ms-5">
                        <div id="cart" className="position-relative d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10 px-2 py-1 ">
                            <Link href='/cart'>
                                <i className="bi bi-cart fs-5  fw-bolder text-dark" />
                            </Link>
                            <div className="">
                                 <span id="amount-cart" className="text-white  position-absolute top-0 start-75 translate-middle bg-success px-2 rounded-circle">
                                    {cartCount}
                                </span> 

                            </div>
                        </div>
                        <div id="account" class="d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10  mx-2 px-2 py-1">
                        <Link href={isLoggedIn ? '/info' : '/login'}>
                            <i class={isLoggedIn ? "bi bi-person fs-5  fw-bolder text-dark" : "bi bi-box-arrow-in-right fs-5  fw-bolder text-dark"} />
                        </Link>
                    </div>
                    </div>
                </div>
            </header >

        </div>
    );
};

export default Header;
