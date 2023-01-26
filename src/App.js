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
import { useState } from "react";

function App()  {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return <div>
        <button onClick={handleClick}>
            Add Animal
            </button>
            <div>
                Number of animals: {count}
            </div>
    </div>;
}

export default App;