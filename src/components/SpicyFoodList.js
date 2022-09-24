import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [choice, setChoice] = useState('All');

  function HandleFilter(e) {
    setChoice(e.target.value)
  }

  const choiceList = foods.filter((food) => {
    if(choice === 'All') {
      return true;
    } else {
      return food.cuisine === choice;
    }
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);

    const updateFoodList = [...foods, newFood]
    setFoods(updateFoodList)
  }

  // function handleLiClick(id) {
  //   const updateAfterClick = foods.filter((food) => food.id !== id)
  //   setFoods(updateAfterClick) 
  // }

  function handleLiClick(id) {
    const updateAfterClick = foods.map((food) => {
       if(food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 }
      } else {
        return food
      }
    })
    setFoods(updateAfterClick) 
  }
  
  const foodList = choiceList.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={HandleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
