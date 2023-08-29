import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    return <div>
        Home Page
        <p style={ { color:'red' } }>{ count }</p>
        <button onClick={ () => setCount(count => count + 1) }>Dirty me</button>
    </div>

}


export default App;
