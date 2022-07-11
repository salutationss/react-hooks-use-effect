import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] =useState("")
  

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count +1)}>Click Me {count}</button>
      <input type="text" placeholder="Type" value={search} onChange={e => (e.target.value)} />




    </div>
    
  )
}

export default App;
 