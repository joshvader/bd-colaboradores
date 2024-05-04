import React, { useState } from "react";
import Alert from "./components/Alert";
import './App.css'
import Form from './components/Form'
import Search from './components/Search'
import { BaseColaboradores } from "./colaboradores"; // aqui estoy importando la lista de colaboradores del colaboradores.JS


function App() {
  // const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  // const [search, setSearch] = useState("");



  return (
    <>
      <div className='container text-center'>
        <h1>BD Colaboradores</h1>
        <div className='col-lg-4 col-md-12 px-lg-3 px-1'>
          <Search />
        </div>
        <div className='d-flex flex-wrap px-lg-3 pt-3'>
          <div className='col-lg-8'>
            {/* Acá va el componente List.jsx */}
          </div>
          <div className='col-lg-4 col-12 px-3'>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
