import React from "react";
import style from "./recipe.module.css";
import { Card } from "antd";
const { Meta } = Card;

export const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    // <div className={style.recipe}>
    //   <img className={style.image} src={image} alt="" />
    //   <h1>{title}</h1>
    //   <h3 style={{ textAlign: "center" }}>
    //     Calories
    //     <br />
    //     {calories}
    //   </h3>

    //   <ol className={style.ingredients}>
    //     <h3>Recipe</h3>
    //     {ingredients.map((ingredients) => (
    //       <li>{ingredients.text}</li>
    //     ))}
    //   </ol>
    // </div>
    <div className={style.recipeContainer}>
      <Card
        className={style.card}
        hoverable
        size="default"
        style={{ width: 360 }}
        cover={<img alt="example" src={image} />}
      >
        <h2>{title}</h2>
        <h3>Calories {calories}</h3>
        <p>Ingredients</p>
        {ingredients.map((ingredients) => (
          <Meta description={ingredients.text} />
        ))}
      </Card>
    </div>
  );
};

export default Recipe;
