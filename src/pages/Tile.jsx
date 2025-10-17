import React from 'react';
import '../styles/Tile.css';

const Tile = ({ value }) => {
  // Don't render anything for empty tiles
  if (value === 0) {
    return <div className="tile tile-empty"></div>;
  }

  return (
    <div className={`tile tile-${value} x${value}`}>
      {value}
    </div>
  );
};

export default Tile;