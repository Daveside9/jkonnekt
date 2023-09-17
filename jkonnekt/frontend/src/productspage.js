import React, { useState } from 'react';
import data from './data';
import './ProductPage.css';
import AccountModal from './accountmodal';
const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [...new Set(data.flatMap((item) => item.categories))];
  const filteredData =
    selectedCategory === 'all'
      ? data
      : data.filter((item) => item.categories.includes(selectedCategory));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample account information
  const accountInfo = {
    username: 'example_user',
    email: 'example@example.com',
    membershipLevel: 'Premium',
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-page">
      <div className="category-filter">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredData.map((item) => (
          <div className="product-item" key={item.name}>
            <img src={item.images[0]} alt={item.name} />
            <p style={{ color: 'green', textAlign: 'center', fontWeight: 'bold' }}>Available </p>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Location: {item.location}</p>
            <div className="app">
      <button onClick={handleOpenModal}>Book Now</button>
      <AccountModal isOpen={isModalOpen} onClose={handleCloseModal} accountInfo={accountInfo} />
    </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
