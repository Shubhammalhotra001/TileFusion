import React, { useEffect, useRef, useState } from 'react';
import useGameLogic from '../hooks/useGameLogic';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import { KEY_CODES, GAME_STATUS, DIRECTIONS } from '../hooks/const';
import '../styles/Game.css';

const Game = () => {
  const {
    board,
    score,
    bestScore,
    gameStatus,
    initializeGame,
    move,
    resetGame
  } = useGameLogic();

  const touchStartRef = useRef({ x: 0, y: 0 });
  const [isSwiping, setIsSwiping] = useState(false);

  // Initialize game on mount
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      const direction = KEY_CODES[event.key];
      
      if (direction) {
        event.preventDefault();
        move(direction);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [move]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    // Prevent page scrolling while swiping on game board
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    
    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 30;
    
    // Determine swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          move(DIRECTIONS.RIGHT);
        } else {
          move(DIRECTIONS.LEFT);
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          move(DIRECTIONS.DOWN);
        } else {
          move(DIRECTIONS.UP);
        }
      }
    }
    
    setIsSwiping(false);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">TileFusion</h1>
        <p className="game-subtitle">Join the tiles and get to <strong>2048!</strong></p>
      </div>

      <ScoreBoard 
        score={score} 
        bestScore={bestScore} 
        onRestart={resetGame} 
      />

      <div 
        className="game-board-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <GameBoard board={board} />
      </div>

      {gameStatus === GAME_STATUS.LOST && (
        <div className="game-over-overlay">
          <div className="game-over-message">
            <h2>Game Over!</h2>
            <p>No moves left</p>
            <p className="try-again">Better luck next time</p>
            <button className="restart-btn" onClick={resetGame}>
              Try Again
            </button>
          </div>
        </div>
      )}

      {gameStatus === GAME_STATUS.WON && (
        <div className="game-over-overlay win">
          <div className="game-over-message">
            <h2>You Win!</h2>
            <p>You reached 2048!</p>
            <button className="restart-btn" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;