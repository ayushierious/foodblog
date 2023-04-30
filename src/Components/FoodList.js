import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FoodList.css";
function FoodList() {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    axios
      .get("https://3970-14-97-167-154.ngrok-free.app/getAllFoodIDs")
      .then((response) => setFoodData(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(foodData);
  if (!foodData) {
    return null;
  }
  return (
    <div className="foodbgContainer">
      {foodData.map((food) => (
        <>
          <div className="foodMain" key={food.food_id}>
            <h2 className="foodh2">{food.title}</h2>
            <img className="foodImg" src={food.photo} alt={food.title} />
            <div className="recipeContainer">
              <p className="foodRecipe">{food.recipe}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default FoodList;
