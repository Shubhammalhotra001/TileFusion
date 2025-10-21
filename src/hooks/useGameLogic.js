import { useState, useCallback, useEffect } from 'react';
import {
  BOARD_SIZE,
  INITIAL_TILES_COUNT,
  DIRECTIONS,
  GAME_STATUS
} from './const';
import {
  createEmptyBoard,
  addRandomTile,
  slideLeft,
  transpose,
  reverseRows,
  hasMovesAvailable,
  hasWon,
  cloneBoard
} from './gameHelpers';

// LocalStorage key for best score
const BEST_SCORE_KEY = 'tilefusion_best_score';

const useGameLogic = () => {
  // Initialize bestScore from localStorage
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    try {
      const savedBestScore = localStorage.getItem(BEST_SCORE_KEY);
      return savedBestScore ? parseInt(savedBestScore, 10) : 0;
    } catch (error) {
      console.error('Error loading best score from localStorage:', error);
      return 0;
    }
  });
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);

  // Save bestScore to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(BEST_SCORE_KEY, bestScore.toString());
    } catch (error) {
      console.error('Error saving best score to localStorage:', error);
    }
  }, [bestScore]);

  // Initialize game board
  const initializeGame = useCallback(() => {
    let newBoard = createEmptyBoard();
    
    // Add initial tiles
    for (let i = 0; i < INITIAL_TILES_COUNT; i++) {
      newBoard = addRandomTile(newBoard);
    }
    
    setBoard(newBoard);
    setScore(0);
    setGameStatus(GAME_STATUS.PLAYING);
  }, []);

  // Handle move in any direction
  const move = useCallback((direction) => {
    if (gameStatus !== GAME_STATUS.PLAYING) return;

    let rotatedBoard = cloneBoard(board);
    let needsRotation = true;

    // Transform board based on direction to reuse slideLeft logic
    switch (direction) {
      case DIRECTIONS.LEFT:
        needsRotation = false;
        break;
      case DIRECTIONS.RIGHT:
        rotatedBoard = reverseRows(rotatedBoard);
        break;
      case DIRECTIONS.UP:
        rotatedBoard = transpose(rotatedBoard);
        break;
      case DIRECTIONS.DOWN:
        rotatedBoard = transpose(rotatedBoard);
        rotatedBoard = reverseRows(rotatedBoard);
        break;
      default:
        return;
    }

    // Perform slide and merge
    const { board: slidBoard, scoreGained, moved } = slideLeft(rotatedBoard);

    if (!moved) return; // No change, don't update

    // Rotate back to original orientation
    let finalBoard = slidBoard;
    switch (direction) {
      case DIRECTIONS.RIGHT:
        finalBoard = reverseRows(finalBoard);
        break;
      case DIRECTIONS.UP:
        finalBoard = transpose(finalBoard);
        break;
      case DIRECTIONS.DOWN:
        finalBoard = reverseRows(finalBoard);
        finalBoard = transpose(finalBoard);
        break;
      default:
        break;
    }

    // Add new random tile
    const boardWithNewTile = addRandomTile(finalBoard);
    
    if (!boardWithNewTile) return; // Safety check

    // Update state
    const newScore = score + scoreGained;
    setBoard(boardWithNewTile);
    setScore(newScore);

    // Update best score
    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    // Check game status
    if (hasWon(boardWithNewTile) && gameStatus !== GAME_STATUS.WON) {
      setGameStatus(GAME_STATUS.WON);
    } else if (!hasMovesAvailable(boardWithNewTile)) {
      setGameStatus(GAME_STATUS.LOST);
    }
  }, [board, score, bestScore, gameStatus]);

  // Reset game
  const resetGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    board,
    score,
    bestScore,
    gameStatus,
    initializeGame,
    move,
    resetGame
  };
};

export default useGameLogic;