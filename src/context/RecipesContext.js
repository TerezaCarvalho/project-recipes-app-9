import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (data) => setRecipes(data.slice(0, 12));

  const context = {
    isFetching,
    setIsFetching,
    recipes,
    setRecipes,
    fetchRecipes,
  };

  return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };

export default RecipesProvider;