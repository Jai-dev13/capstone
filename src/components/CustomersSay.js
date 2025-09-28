import React from 'react';

function CustomersSay() {
  return (
    <section className="customers-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        <div className="card">
          <div className="rating">★★★★★</div>
          <p>"Amazing food and atmosphere! The Greek salad was perfect."</p>
          <span>- Sarah M.</span>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p>"Best Mediterranean restaurant in Chicago! Love the bruschetta."</p>
          <span>- John D.</span>
        </div>
        <div className="card">
          <div className="rating">★★★★★</div>
          <p>"The lemon dessert is to die for! Will definitely be back."</p>
          <span>- Maria R.</span>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
