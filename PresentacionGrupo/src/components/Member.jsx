const Member = ({ name, age }) => {
    return (
        <div className="row">
            <h4>{name}</h4>
            <h4>{age}</h4>
        </div>
    );
};

export default Member;
