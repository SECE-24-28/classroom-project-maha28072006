// import React from "react";

// function Counter() {
//   let count = 0;

//   const increase = () => {
//     count++;
//     document.getElementById("myCount").innerText =count;
//   };

//   return (
//     <div>
//       <h1 id="myCount">count={count}</h1>
//       <button onClick={increase}>Click</button>
//     </div>
//   );
// }

// export default Counter;









// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Count {count}</h1>
//       <button onClick={increment}>Click</button>
//     </div>
//   );
// }

// export default Counter;





import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count {count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
