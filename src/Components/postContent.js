import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const PostContent = () => {
     const userId = useContext(UserContext);

     const [title, setTitle] = useState("");
     const [photo, setPhoto] = useState("");
     const [recipe, setRecipe] = useState("");
     const [ingredient, setIngredient] = useState("");
     const [cuisineType, setCuisineType] = useState("");
     const [mealType, setMealType] = useState("");
     const [dietaryRestriction, setDietaryRestriction] = useState("");
     console.log(userId)


     const handleSubmit = (e) => {
          e.preventDefault();

          const data = {
               food_ids: [
                    {
                         title: `${title}`,
                         photo: `${photo}`,
                         recipe: `${recipe}`,
                         ingredient: `${ingredient}`,
                         cuisineType: `${cuisineType}`,
                         mealType: `${mealType}`,
                         dietaryRestriction: `${dietaryRestriction}`,
                         
                    },
               ],
          };
          axios
               .patch(`https://3970-14-97-167-154.ngrok-free.app/addFoodIDs/${userId}`, data, {
                    headers: {
                         'Content-Type': 'application/json',
                         'Access-Control-Allow-Origin': 'http://localhost:3000'
                    }
               })
               .then((response) => {
                    console.log(response.data.user_id);
               })
               .catch((error) => {
                    console.error(error);
               });
     };

     return (<div>

          <form onSubmit={handleSubmit}>
               <h1>Add a new post</h1>
               <div>
                    <label>
                         Title:
                         <input
                              type="text"
                              value={title}
                              onChange={(event) => setTitle(event.target.value)}
                         />
                    </label>
                    <label>
                         Photo:
                         <input
                              type="text"
                              value={photo}
                              onChange={(event) => setPhoto(event.target.value)}
                         />
                    </label>
                    <label>
                         Recipe:
                         <input
                              type="text"
                              value={recipe}
                              onChange={(event) => setRecipe(event.target.value)}
                         />
                    </label>
                    <label>
                         Ingredients:
                         <input
                              type="text"
                              value={ingredient}
                              onChange={(event) => setIngredient(event.target.value)}
                         />
                    </label>
                    <label>
                         Cuisine Types:
                         <input
                              type="text"
                              value={cuisineType}
                              onChange={(event) => setCuisineType(event.target.value)}
                         />
                    </label>
                    <label>
                         Meal Types:
                         <select value={mealType} onChange={(event) => setMealType(event.target.value)}>
                              <option value="">-- Select Meal Type --</option>
                              <option value="Breakfast">Breakfast</option>
                              <option value="Lunch">Lunch</option>
                              <option value="Dinner">Dinner</option>
                         </select>
                    </label>
                    <label>
                         Dietary Restriction:
                         <input
                              type="text"
                              value={dietaryRestriction}
                              onChange={(event) => setDietaryRestriction(event.target.value)}
                         />
                    </label>

                    <button type="submit">Submit</button>



               </div>
          </form>
     </div>);
};

export default PostContent;
