import React from 'react';
import '../styles/Game.css';

const ScoreBoard = ({ score, bestScore, onRestart }) => {
  return (
    <div className="score-board">
      <div className="scores">
        <div className="score-container">
          <div className="score-label">SCORE</div>
          <div className="score-value">{score}</div>
        </div>
        <div className="score-container">
          <div className="score-label">BEST</div>
          <div className="score-value">{bestScore}</div>
        </div>
      </div>
      <button className="new-game-btn" onClick={onRestart}>
        New Game
      </button>
    </div>
  );
};

export default ScoreBoard;