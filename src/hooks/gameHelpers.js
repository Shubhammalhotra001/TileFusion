import { BOARD_SIZE, TILE_VALUES, TILE_SPAWN_PROBABILITY } from './const';

/**
 * Create an empty board (4x4 grid filled with 0s)
 */
export const createEmptyBoard = () => {
  return Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));
};

/**
 * Get all empty cells (cells with value 0) from the board
 * Returns array of {row, col} objects
 */
export const getEmptyCells = (board) => {
  const emptyCells = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }
  return emptyCells;
};

/**
 * Get a random tile value (2 or 4) based on spawn probability
 */
export const getRandomTileValue = () => {
  const random = Math.random();
  return random < TILE_SPAWN_PROBABILITY[2] ? 2 : 4;
};

/**
 * Add a random tile to an empty cell on the board
 * Returns new board with added tile, or null if no empty cells
 */
export const addRandomTile = (board) => {
  const emptyCells = getEmptyCells(board);
  
  if (emptyCells.length === 0) {
    return null; // No empty cells
  }
  
  // Pick random empty cell
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[randomIndex];
  
  // Create new board with added tile
  const newBoard = board.map(row => [...row]);
  newBoard[row][col] = getRandomTileValue();
  
  return newBoard;
};

/**
 * Transpose the board (swap rows and columns)
 * Used for converting vertical moves to horizontal
 */
export const transpose = (board) => {
  const newBoard = createEmptyBoard();
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      newBoard[col][row] = board[row][col];
    }
  }
  return newBoard;
};

/**
 * Reverse each row in the board
 * Used for right/down movements
 */
export const reverseRows = (board) => {
  return board.map(row => [...row].reverse());
};

/**
 * Slide and merge tiles in a single row to the left
 * Returns {row: newRow, scoreGained: number}
 */
export const slideAndMergeRow = (row) => {
  // Filter out zeros (slide tiles left)
  let newRow = row.filter(val => val !== 0);
  let scoreGained = 0;
  
  // Merge adjacent equal tiles
  for (let i = 0; i < newRow.length - 1; i++) {
    if (newRow[i] === newRow[i + 1]) {
      newRow[i] *= 2;
      scoreGained += newRow[i];
      newRow[i + 1] = 0;
    }
  }
  
  // Remove zeros created by merging
  newRow = newRow.filter(val => val !== 0);
  
  // Fill remaining spaces with zeros
  while (newRow.length < BOARD_SIZE) {
    newRow.push(0);
  }
  
  return { row: newRow, scoreGained };
};

/**
 * Slide and merge entire board to the left
 * Returns {board: newBoard, scoreGained: number, moved: boolean}
 */
export const slideLeft = (board) => {
  let totalScore = 0;
  let moved = false;
  
  const newBoard = board.map(row => {
    const { row: newRow, scoreGained } = slideAndMergeRow(row);
    totalScore += scoreGained;
    
    // Check if this row changed
    if (!arraysEqual(row, newRow)) {
      moved = true;
    }
    
    return newRow;
  });
  
  return { board: newBoard, scoreGained: totalScore, moved };
};

/**
 * Compare two arrays for equality
 */
const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

/**
 * Check if two boards are equal
 */
export const boardsEqual = (board1, board2) => {
  for (let row = 0; row < BOARD_SIZE; row++) {
    if (!arraysEqual(board1[row], board2[row])) {
      return false;
    }
  }
  return true;
};

/**
 * Deep clone a board
 */
export const cloneBoard = (board) => {
  return board.map(row => [...row]);
};

/**
 * Check if any moves are possible
 * Returns true if tiles can move or merge
 */
export const hasMovesAvailable = (board) => {
  // Check for empty cells
  if (getEmptyCells(board).length > 0) {
    return true;
  }
  
  // Check for possible merges (horizontal)
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE - 1; col++) {
      if (board[row][col] === board[row][col + 1]) {
        return true;
      }
    }
  }
  
  // Check for possible merges (vertical)
  for (let col = 0; col < BOARD_SIZE; col++) {
    for (let row = 0; row < BOARD_SIZE - 1; row++) {
      if (board[row][col] === board[row + 1][col]) {
        return true;
      }
    }
  }
  
  return false;
};

/**
 * Check if board contains the target tile (2048)
 */
export const hasWon = (board) => {
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === 2048) {
        return true;
      }
    }
  }
  return false;
};