import "./App.css";
import "antd/dist/antd.css";
import Recipe from "./Recipe";
import React, { useEffect, useState } from "react";
import Nav from "./components/navbar/Nav";
import { BackTop } from "antd";
import Footer from "./components/Footer/Footer";

function App() {
  const APP_ID = "05cb9da0";
  const APP_KEY = "7e7a9c6b56985cf3c1d72ad1b6ad714c";
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setsearched] = useState(false);

  //only update the dom when value of 'query' changes
  //query is in dependency array
  //get_recipes() is called at start and whenever 'query' changes
  useEffect(() => {
    //function to fetch recipes from an API
    //uses app_ID and app_key provided from API
    const get_recipes = async () => {
      //get the response of the GET request
      const resp = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      //convert response into json parsable data
      const data = await resp.json();
      //update the recipes variable with the results of the request
      setRecipes(data.hits);
    };

    get_recipes();
  }, [query]);

  //Function to update the search results with whatever is typed into search box
  //updates onChange
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  //function set the search query when user presses 'enter' or clicks submit
  const getSearch = (e) => {
    //prevent input from changing
    e.preventDefault();
    //update the query with whatever is currently in the search box
    setQuery(search);
    //update the search box back to blank value
    setSearch("");
    //set the value of searched to true, indicating we have searched for something
    setsearched(true);
  };

  return (
    <div className="App">
      <Nav />
      <form onSubmit={getSearch} className="search-form">
        <button className="search-button" type="submit">
          Search
        </button>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
      </form>
      {searched ? (
        <h4 className="searched">Showing results for.. {query}</h4>
      ) : null}
      <div className="recipes">
        {recipes.map((recipes, i) => (
          <Recipe
            key={i}
            title={recipes.recipe.label}
            image={recipes.recipe.image}
            calories={recipes.recipe.calories}
            ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
      <BackTop />
      <strong className="site-back-top-basic"> </strong>
      <Footer />
    </div>
  );
}

export default App;
