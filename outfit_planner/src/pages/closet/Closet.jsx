import React, { useState } from 'react';
import ClothesWrapper from '../../components/clothes_wrapper/Clothes_wrapper';
import './closet.css';

const Closet = () => {
  const [items, setItems] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newItems = files.map((file) => ({
      id: Date.now() + Math.random(),
      src: URL.createObjectURL(file),
    }));
    setItems((prev) => [...prev, ...newItems]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newItems = files.map((file) => ({
      id: Date.now() + Math.random(),
      src: URL.createObjectURL(file),
    }));
    setItems((prev) => [...prev, ...newItems]);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // required to allow drop
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      className="wardrobe-wrapper"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="wardrobe-header">
        <label htmlFor="file-upload" className="add-image-btn">
          + Add Image
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </div>

      {items.length === 0 && (
        <p className="drag-message">Drag your files here...</p>
      )}

      <ClothesWrapper items={items} onDelete={handleDelete} />
    </div>
  );
};

export default Closet;
