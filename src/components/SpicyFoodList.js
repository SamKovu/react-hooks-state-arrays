import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods([...foods,newFood])
  }


  function handleLiClick(foodId){
 
    setFoods((foods)=>{
      const newFoods=[...foods]
      const newFood=foods.filter((food)=>food.id===foodId);
      newFood[0].heatLevel++;
      newFoods.splice(foodId-1,1,newFood[0])
      
      return newFoods
    })
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
     </select>

    </div>
  );
}

export default SpicyFoodList;
