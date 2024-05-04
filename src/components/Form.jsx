import { useState } from "react";


const Form = ({onSubmit, setAlert}) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setColaborador({ ...colaborador, [e.target.name]: e.target.value });
  };

  //Funcion para enviar el formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(colaborador);
    //Validar los campos

    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setAlert({
        error: true,
        msg: "Completa todos los campos!",
        color: "danger",
      });
      return;
    }
    // Reinicia el formulario y muestra la alerta de éxito
    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setAlert({
      error: false,
      msg: "Colaborador agregado exitosamente!",
      color: "success",
    });
  };
   return (

    <>
     <h1 className="text-white">Agregar Colaborador</h1>
     <form  onSubmit={handleSubmit} className="mt-3">
     <input
          type="text"
          className="form-control mb-3"
          name="nombre"
          placeholder="Nombre del colaborador"
          onChange={handleChange}
          value={colaborador.nombre}
        />
        <input
          type="email"
          className="form-control mb-3"
          name="correo"
          placeholder="Email del colaborador"
          onChange={handleChange}
          value={colaborador.correo}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="edad"
          placeholder="Edad del colaborador"
          onChange={handleChange}
          value={colaborador.edad}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="cargo"
          placeholder="Cargo del colaborador"
          onChange={handleChange}
          value={colaborador.cargo}
        />
        <input
          type="text"
          className="form-control mb-3"
          name="telefono"
          placeholder="Teléfono del colaborador"
          onChange={handleChange}
          value={colaborador.telefono}
        />
        <button type="submit" className="btn btn-outline-light w-100">
          Agregar Colaborador
        </button>
     </form>
    </>
  )
}

export default Form