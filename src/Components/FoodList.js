import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div>
      {foodData.map((food) => (
        <div key={food.food_id}>
          <h2>{food.title}</h2>
          <img src={food.photo} alt={food.title} />
          <p>{food.recipe}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
