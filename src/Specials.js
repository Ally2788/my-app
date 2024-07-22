import React from 'react';
import './styles.css';

function Specials() {
  return (
    <section className="specials">
      <h2>This week's Specials!</h2>
      <div className="specials-grid">
        <article>
          <h3>Greek Salad</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <button>Order delivery</button>
        </article>
        <article>
          <h3>Bruschetta</h3>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <button>Order delivery</button>
        </article>
        <article>
          <h3>Lemon Dessert</h3>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button>Order delivery</button>
        </article>
      </div>
    </section>
  );
}

export default Specials;
