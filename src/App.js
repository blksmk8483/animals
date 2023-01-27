// --------- Option 1 way to write this --------
// function App()  {
//     const handleClick = () => {
//         console.log('Button was clicked!!!')
//     };

//     return <div>
//         <button onClick={handleClick}>Add Animal</button>
//     </div>;
// }

// export default App;

// -----------------------------------------


// --------- Option 2 way to write this --------
import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";


function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App()  {

        // EXAMPLES FOR MYSELF TO DEMONSTATE DIFFERENT WAYS TO WRITE

    // function makeArray() {
    //     return [1, 10, 32, 40];
    // }

    // ---- This is the long hand version to write this out ---
    // const myArray = makeArray();
    // const firstElement = myArray[0];
    // const secondElement = myArray[1];
    // console.log(firstElement, secondElement);

    // ----- This is destructuring the array -----
    // const [firstElement, secondElement, thirdElement] = makeArray();
    // console.log(firstElement, secondElement, thirdElement);

    // THIS BELOW IS WHAT APPLIES TO MY APP
 
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
    <div className='app'>
        <button onClick={handleClick}>Add Animal</button>  
        <div className='animal-list'>{renderedAnimals}</div>
    </div>
    );
}

export default App;