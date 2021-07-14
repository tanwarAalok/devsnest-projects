const Card = (props) => {
    return (
        <div className="card">
            <h1 className="title">{props.tittle}</h1>
            <p className="calorie">You have consumed {props.calorie} cals today</p>
        </div>
        
    );
};

export default Card;