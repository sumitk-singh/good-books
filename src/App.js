import "./styles.css";
import React, { useState } from "react";

export default function App() {
  //data set
  const dish = {
    Delhi_dish_1: "Chole Bhature",
    Delhi_dish_1_rating: "4.5/5",
    Delhi_dish_2: "Fish Fry",
    Delhi_dish_2_rating: "4/5",
    Bihar_dish_1: "Litti Chokha",
    Bihar_dish_1_rating: "5/5",
    Bihar_dish_2: "Mutton Kebabs",
    Bihar_dish_2_rating: "3.5/5",
    Mumbai_dish_1: "Batata Vada",
    Mumbai_dish_1_rating: "4.8/5",
    Mumbai_dish_2: "Ragda pattice",
    Mumbai_dish_2_rating: "4.3/5"
  };

  var [dish_1, newDish_1] = useState("Chole Bhature");
  var [dish_1_rating, newDish_1_rating] = useState("4.5/5");
  var [dish_2, newDish_2] = useState("Fish Fry");
  var [dish_2_rating, newDish_2_rating] = useState("4/5");

  //for Delhi
  function clickHandelerForDelhi() {
    dish_1 = dish["Delhi_dish_1"];
    newDish_1(dish_1);
    dish_1_rating = dish["Delhi_dish_1_rating"];
    newDish_1_rating(dish_1_rating);

    dish_2 = dish["Delhi_dish_2"];
    newDish_2(dish_2);
    dish_2_rating = dish["Delhi_dish_2_rating"];
    newDish_2_rating(dish_2_rating);
  }

  //for Bihar
  function clickHandelerForBihar() {
    dish_1 = dish["Bihar_dish_1"];
    newDish_1(dish_1);
    dish_1_rating = dish["Bihar_dish_1_rating"];
    newDish_1_rating(dish_1_rating);

    dish_2 = dish["Bihar_dish_2"];
    newDish_2(dish_2);
    dish_2_rating = dish["Bihar_dish_2_rating"];
    newDish_2_rating(dish_2_rating);
  }

  //for Mumbai
  function clickHandelerForMumbai() {
    dish_1 = dish["Mumbai_dish_1"];
    newDish_1(dish_1);
    dish_1_rating = dish["Mumbai_dish_1_rating"];
    newDish_1_rating(dish_1_rating);

    dish_2 = dish["Mumbai_dish_2"];
    newDish_2(dish_2);
    dish_2_rating = dish["Mumbai_dish_2_rating"];
    newDish_2_rating(dish_2_rating);
  }

  return (
    <div className="App">
      <div className="app-heading">
        <span>🍽️</span> Famous dish
      </div>
      <h4>Top 2 Famous dish in-</h4>
      <div className="btn-group">
        <button className="btn" onClick={clickHandelerForDelhi}>
          Delhi
        </button>
        <button className="btn" onClick={clickHandelerForBihar}>
          Bihar
        </button>
        <button className="btn" onClick={clickHandelerForMumbai}>
          Mumbai
        </button>
      </div>

      <hr></hr>
      <ul>
        <h3>{dish_1}</h3>
        <p>{dish_1_rating}</p>
      </ul>
      <ul>
        <h3>{dish_2}</h3>
        <p>{dish_2_rating}</p>
      </ul>
    </div>
  );
}

//follow the WBS (work breakdown structure)
//step-1  basic layout
//step-2  dataset and implement state hook
//step-3  clickHandeler function
//step-4  test the app
//step-5  push on git
