import React from 'react';
import data from './data'; // Import the data array

function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {data.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.images[0]} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Location: {item.location}</p>
            <p>Categories: {item.categories.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
