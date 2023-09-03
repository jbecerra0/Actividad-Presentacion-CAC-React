import Presentacion from "./components/Presentacion";
// Falta llenar el objeto con los datos reales
const grupo = {
    nombre: "Grupo 1",
    integrantes: [
        {
            nombre: "Jose",
            edad: 21,
        },
        {
            nombre: "Miguel",
            edad: 30,
        },
        {
            nombre: "Juan",
            edad: 40,
        },
    ],
    descripcion: "Este es un grupo de trabajo",
};

const App = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Presentacion grupo={grupo} />
        </div>
    );
};

export default App;
