import { useEffect, useState } from 'react'
import './App.css'
import CatList from "./components/CatList"
import AddCatForm from "./components/AddCatForm"

function App() {
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
      <h1>ДУРОВ ВЕРНУЛ СТЕНУ</h1>
      <CatList/>
      <AddCatForm/>
    </div>
  )
}

export default App;
