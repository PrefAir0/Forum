import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCats(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default App
