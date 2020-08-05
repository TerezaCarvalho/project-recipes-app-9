import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import {
  searchByCategoriesList,
  searchRecipesByName,
  searchByCategories,
} from '../services/getRecipes';
import { RecipesContext } from '../context/RecipesContext';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState('');
  const { fetchRecipes, setIsFetching } = useContext(RecipesContext);

  useEffect(() => {
    searchByCategoriesList(type).then((data) => {
      setCategories((data.meals || data.drinks).slice(0, 5));
    });
  }, [type]);

  useEffect(() => {
    filteredData
      ? searchByCategories(type, filteredData).then((data) => {
          fetchRecipes(data);
          setIsFetching(false);
        })
      : searchRecipesByName(type, '').then((data) => {
          fetchRecipes(data);
          setIsFetching(false);
        });
  }, [filteredData]);

  const handleChange = (category) => {
    category === 'All' || category === filteredData
      ? setFilteredData('')
      : setFilteredData(category);
  };

  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={(event) => handleChange(event.target.innerHTML)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          data-testid={`${cat.strCategory}-category-filter`}
          type="button"
          onClick={(event) => handleChange(event.target.innerHTML)}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
