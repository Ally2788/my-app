import React from 'react';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './styles.css';

const meals = [
  {
    name: 'Greek Salad',
    image: '/images/greeksalad.jpg',
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: 'Bruschetta',
    image: '/images/bruchetta.jpg',
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: '/images/lemondessert.png',
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

function Specials() {
  return (
    <section className="specials">
      <h2>This week's Specials!</h2>
      <div className="specials-grid">
      {meals.map((meal, index) => (
          <article key={index}>
            <img src={meal.image} alt={meal.name} className="specials-image" />
            <div class="title-price">
            <h3>{meal.name}</h3>
            <span>{meal.price}</span>
            </div>
            <p>{meal.description}</p>
            <Link to="/order" className="button">
              Order Delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
