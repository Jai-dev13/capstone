import React from 'react';

function Specials() {
  return (
    <section className="specials-section">
      <h2>This Week's Specials</h2>
      <div className="specials-grid">
        <div className="card">
          <h3>Greek Salad</h3>
          <p>Fresh vegetables, olives, and our house-made vinaigrette</p>
          <span>$12.99</span>
        </div>
        <div className="card">
          <h3>Bruschetta</h3>
          <p>Grilled bread with tomatoes, garlic, and fresh basil</p>
          <span>$9.99</span>
        </div>
        <div className="card">
          <h3>Lemon Dessert</h3>
          <p>Fresh lemon cake with a light, citrus glaze</p>
          <span>$7.99</span>
        </div>
      </div>
    </section>
  );
}

export default Specials;
