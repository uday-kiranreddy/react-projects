import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`};
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "Read More"};
          </button>
        </p>
        <button onClick={()=>removeTour(id)} className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
