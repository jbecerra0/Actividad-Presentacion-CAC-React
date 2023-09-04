import { useState } from "react";

const Presentacion = ({ grupo }) => {
    const [indice, setIndice] = useState(0);
    const { integrantes, nombre, descripcion } = grupo;
    const longitud = integrantes.length;

    const handleSiguiente = () => {
        if (indice == longitud - 1) {
            setIndice(0);
        } else {
            setIndice(indice + 1);
        }
    };

    const handleAnterior = () => {
        if (indice == 0) {
            setIndice(longitud - 1);
        } else {
            setIndice(indice - 1);
        }
    };

    return (
        <div className="card text-center p-5 gap-3 border border-primary border-1">
            <div className="row">
                <h1 className="display-6">
                    <strong>{nombre}</strong>
                </h1>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={handleAnterior}>
                    {"<-"}
                </button>
            </div>
            <div className="row">
                <h4>{integrantes[indice].nombre}</h4>
                <h4>{integrantes[indice].edad}</h4>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={handleSiguiente}>
                    {"->"}
                </button>
            </div>
            <div className="row">
                <p className="lead">{descripcion}</p>
            </div>
        </div>
    );
};

export default Presentacion;
