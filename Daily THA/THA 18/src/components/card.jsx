const Card = ({number}) => {
    return (
        <div className="card" style={{backgroundColor: (number%2===0?'white': 'black')}}></div>
    );
};

export default Card;