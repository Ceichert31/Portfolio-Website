import { useState } from 'react';
import './ImageList.css';

const ImageList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  //Test data
  const items = [
    {
      id: 1,
      title: "Test 1",
      image: "https://picsum.photos/300/200?random=1",
      description: "Test Text short",
      fullDescription: "Test text"
    },
  ];

  if (selectedItem) {
    return (
      <div className="detail-page">
        <button onClick={() => setSelectedItem(null)} className="back-button">
          ← Back
        </button>
        <img src={selectedItem.image} alt={selectedItem.title} className="detail-image" />
        <h1>{selectedItem.title}</h1>
        <p className="detail-description">{selectedItem.fullDescription}</p>
      </div>
    );
  }

  return (
    <div className="image-list-container">
      <h2>Image Gallery</h2>
      <div className="image-list">
        {items.map(item => (
          <div 
            key={item.id} 
            className="image-item"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.title} />
            <div className="image-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;