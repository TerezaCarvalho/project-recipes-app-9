import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExplorerDrinksOrFoods = ({ type, title }) => {
  const direction = useLocation().pathname;
  if (direction === '/explorar/comidas') {
    return (
      <div>
        <Header title={title} type={type} />
        <div>
          <div>
            <Link to="/explorar/comidas/ingredientes">
              <button type="button" data-testid="explore-by-ingredient">
                Por Ingredientes
              </button>
            </Link>
            <Link to="/explorar/comidas/area">
              <button type="button" data-testid="explore-by-area">
                Por Local de Origem
              </button>
            </Link>
            <button type="button" data-testid="explore-surprise" onClick={''}>
              Me Surpreenda!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header title={title} type={type} />
      <div>
        <div>
          <Link to="/explorar/bebidas/ingredientes">
            <button type="button" data-testid="explore-by-ingredient">
              Por Ingredientes
            </button>
          </Link>
          <button type="button" data-testid="explore-surprise" onClick={''}>
            Me Surpreenda!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorerDrinksOrFoods;
