
'use client';
import { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3000/products');
      const newProducts = await res.json();
      setProducts(newProducts);
    }
    fetchProducts();
  }, []);
  const handleSort = (products) => {
    return [...products].sort((a, b) => {
      if (sortOption === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  }


  return (
    <div className="container my-3">
      <div>
        <div className=" d-flex justify-content-between mx-1 ">
          <div className="p-1 w-auto">
            <h5 className="text-success">DANH SÁCH SẢN PHẨM</h5>
          </div>
          <div>
            <input type="checkbox" id="showAll" name="showAll" value="showAll"  className='me-2'  />
            <label htmlFor="showAll" className='me-2'>Hiển thị tất cả</label>
            <input type="checkbox" id="showPhone" name="showPhone" value="showPhone"  className='me-2'  />
            <label htmlFor="showPhone" className='me-2'>Nồi cơm điện</label>
            <input type="checkbox" id="showLaptop" name="showLaptop" value="showLaptop"  className='me-2'  />
            <label htmlFor="showLaptop" className='me-2'>Tủ lạnh</label>
            <input type="checkbox" id="showLinhKien" name="showLinhKien" value="showLinhKien"  className='me-2'  />
            <label htmlFor="showLinhKien" className='me-2'>Tivi</label>
          </div>
          <select className="form-select w-auto" onChange={handleSortChange}>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>
        <div className="row ">
          <ProductCard data={handleSort(products)} />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
  
  