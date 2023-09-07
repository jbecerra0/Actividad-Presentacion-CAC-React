import { useState } from "react";

const Presentation = ({ team }) => {
    const [index, setIndex] = useState(0);
    const { members, name, description } = team;
    const { length } = members;

    const handleNext = () => {
        if (index == length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index == 0) {
            setIndex(length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <div className="card text-center p-5 gap-3 border border-primary border-1">
            <div className="row">
                <h1 className="display-6">
                    <strong>{name}</strong>
                </h1>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={handlePrevious}>
                    {"<-"}
                </button>
            </div>
            <div className="row">
                <h4>{members[index].name}</h4>
                <h4>{members[index].age}</h4>
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={handleNext}>
                    {"->"}
                </button>
            </div>
            <div className="row">
                <p className="lead">{description}</p>
            </div>
        </div>
    );
};

export default Presentation;
