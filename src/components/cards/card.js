import React from "react";
import "./card.css";

function Card({ icon }) {
  return (
    <div className="card">
      {icon && <div>{icon}</div>}
      <div className="card-header">Header</div>
      <div className="card-body">Body</div>
    </div>
  );
}

export default Card;
