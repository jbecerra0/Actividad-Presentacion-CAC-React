import Presentacion from "./components/Presentacion";

const grupo = {
    nombre: "Dancin Guarriors",
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
    descripcion: "Este es un grupo de trabajo muy profesional",
};

const App = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Presentacion grupo={grupo} />
        </div>
    );
};

export default App;
