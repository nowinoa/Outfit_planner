import React from 'react';

const ItemCard = ({ id, src, onDelete }) => {
  return (
    <div className="item-card">
      <img src={src} alt="wardrobe item" className="item-image" draggable={false}/>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        ✕
      </button>
    </div>
  );
};

export default ItemCard;