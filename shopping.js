// App.js

import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, rating: 4, quantity: 0 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, rating: 3, quantity: 0 },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 15, rating: 5, quantity: 0 },
    // Add more products as needed
  ]);

  const handleIncrement = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map(product =>
      product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleAddToCart = (id) => {
    // Implement add to cart functionality here
    console.log(`Product with id ${id} added to cart.`);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          {/* Add categories filter options here */}
        </nav>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
