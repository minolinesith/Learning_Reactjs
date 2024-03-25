import { useState } from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {

        setFoods(foods.filter((element, i) => i != index));

    }

    return (<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" placeholder="Enter food name" id="foodInput" />
        <button onClick={handleAddFood}>Add food</button>


    </div>

    );





}

export default MyComponent