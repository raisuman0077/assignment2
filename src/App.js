import React, {useState} from "react";
import Increment from "./increment";


function App() {
 const [num, setNum] = useState(10);
 
 const handleClick = (d) => {
  setNum(num+d);
 };

  return (
    <>
    <div className="number">
        <i>The number is: {num}</i>
    </div>
      < Increment inc={handleClick} />
    </>
  );
}

export default App;
