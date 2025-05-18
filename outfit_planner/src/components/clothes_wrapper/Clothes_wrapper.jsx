import React from 'react';
import ItemCard from '../item_card/Item_card';

const Clothes_wrapper = ({ items, onDelete }) => {
  return (
    <div className="wardrobe-grid">
      {items.map((item) => (
        <ItemCard key={item.id} id={item.id} src={item.src} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Clothes_wrapper;