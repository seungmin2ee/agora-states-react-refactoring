import { useEffect, useState } from "react";
import "./App.css";
import Discussions from "./componentes/Discussions";
import Form from "./componentes/Form";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then( res => res.json())
    .then ( json => setData(json))
  }, [])
  
  return (
    <main>
      <>
        <h1>My Agora States</h1>
        <Form />
        <Discussions discussions={data}/>
      </>
    </main>
  );
}

export default App;
