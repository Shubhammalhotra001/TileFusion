import React, { useEffect } from 'react';
import useGameLogic from '../hooks/useGameLogic';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import { KEY_CODES, GAME_STATUS } from '../hooks/const';
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

      <GameBoard board={board} />

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