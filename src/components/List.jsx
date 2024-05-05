
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types';


const List = ({ colaboradores, eliminarColaborador }) => {
    return (
        <div className="container mt-4">
            <h1 className="text-white">Listado de Colaboradores</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {colaboradores.map((colaborador) => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.id}</td>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                            <span className="btnEliminar" onClick={() => eliminarColaborador(colaborador)}>
                                ❌
                            </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};
List.propTypes = {
    colaboradores: PropTypes.array.isRequired,
    eliminarColaborador: PropTypes.func.isRequired
};

export default List;