import React from 'react';
import { Link } from 'react-router-dom';

function Project({ card }) {
  return (
    <div>
      <Link to="index.html" style={{ textDecoration: 'none' }}>
        <div className="card h-100" style={{ marginBottom: 24 }}>
          <img src={card.card_image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4>{card.card_title}</h4>
            <p className="portpara">{card.card_subTitle}</p>
            <p className="portpara">{card.card_paragraph}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
