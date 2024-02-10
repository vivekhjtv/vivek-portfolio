import React from 'react';
import { Link } from 'react-router-dom';

function Project({ card }) {
  return (
    <div>
      <Link to={card.link} target="_blank" style={{ textDecoration: 'none' }}>
        <div
          className="card"
          style={{
            marginBottom: 24,
            height: 512,
            overflow: 'hidden',
          }}
        >
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
