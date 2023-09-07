import Presentation from "./components/Presentation";

const team = {
    name: "Dancin Guarriors",
    members: [
        {
            name: "Jose",
            age: 21,
        },
        {
            name: "Miguel",
            age: 30,
        },
        {
            name: "Juan",
            age: 40,
        },
    ],
    description: "Este es un grupo de trabajo",
};

const App = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Presentation team={team} />
        </div>
    );
};

export default App;
