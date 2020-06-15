import React, {useState, useEffect} from 'react';
import './App.css';


//USEEFFECT 

export default function App(){
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>

  )
}





//USESTATE 
// function App() {

//   const [count,setCount] = useState(4)
//   const [theme,setTheme] = useState("blue")


//   function decrementCount(){
//     setCount(prevCount => prevCount - 1)
//   }

//   function incrementCount(){
//     setCount(prevCount => prevCount + 1)
//     setTheme("red")
//   }

//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   );
// }

// export default App;
