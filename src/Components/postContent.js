import React, { useState } from "react";
import axios from "axios";

const postContent = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      food_ids: [
        {
          title: "Pizza",
          photo: "pizza.jpg",
          recipe: "Pizza recipe",
          ingredient: "Pizza ingredients",
          cuisineType: "Italian",
          mealType: "Dinner",
          dietaryRestriction: "None",
        //   views: "100",
        //   comment: "Great pizza!",
        //   shared: "Yes",
        },
      ],
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
  };

  return (<div></div>);
};

export default postContent;
