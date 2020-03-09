import React from "react";
import "./Score.css";

const Score = props => (
<<<<<<< HEAD
  <div className="gameScore">
    <h3 className="score">Your Score <Arrow /> {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);
=======
    <div className="score">
        {props.type}: {props.score}
    </div>
)
>>>>>>> 9a1a508f57d8a7591ade4d9f372d9d93bb7f8269

export default Score;