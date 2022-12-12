import {useState} from 'react';
import'./App.css';

function App() {
  
  const [text,settext] = useState(); 
  const changeval = (op) => {
    if (op === 5) {
      settext(text(1 + 5))
    }
    else {
      settext(text(1 - 5))
    }
  }
   return(
    <div className="App">
         <h1>HELLO</h1>
        <button onClick={()=>changeval(1)}>INCREMENT</button>
         <h2>TEXT</h2>
        <button onClick={()=>changeval(4)}>DECREMENT</button>
        </div>
  );
}
export default App;