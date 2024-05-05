import { useState } from "react";
import './App.css'
import Alert from "./components/Alert";
import Form from './components/Form'
import Search from './components/Search'
import List from './components/List'
import { BaseColaboradores } from "./BaseColaboradores"; // aqui estoy importando la lista de colaboradores del colaboradores.JS

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  const [idCounter, setIdCounter] = useState(BaseColaboradores.length+1);

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {...nuevoColaborador, id: idCounter};
    setColaboradores([...colaboradores, colaboradorConId]);
    setIdCounter(idCounter + 1);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const eliminarColaborador = (colaborador) => {
    const listaFiltrada = colaboradores.filter(el => el.id !== colaborador.id);
    setColaboradores(listaFiltrada);
  };

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });



  return (
    <>
      <div className='container text-center'>
        <h1>BD Colaboradores</h1>
        <div className='col-lg-4 col-md-12 px-lg-3 px-1'>
          <Search search={search} onChange={handleChange}/>
        </div>
        <div className='d-flex flex-wrap px-lg-3 pt-3'>
          <div className='col-lg-8'>
            <List colaboradores={filteredColaboradores} eliminarColaborador={eliminarColaborador}/>
          </div>
          <div className='col-lg-4 col-12 px-3'>
            <Form onSubmit={handleSubmit} setAlert={setAlert} />
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
