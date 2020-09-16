import React, {useState} from "react";





const Contador = () => {
    const [count, setCount] = useState(0);
    
if(count<0){
    setCount(0);
};

return(
    <div>
    <h1>{count}</h1>
    <div>
<button onClick={()=>setCount(count - 1)}>-</button>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
    </div>
);



};


export default Contador;

