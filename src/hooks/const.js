// Game configuration constants
export const BOARD_SIZE = 4;

// Tile values and their spawn probability
export const TILE_VALUES = [2, 4];
export const TILE_SPAWN_PROBABILITY = {
  2: 0.9,  // 90% chance to spawn 2
  4: 0.1   // 10% chance to spawn 4
};

// Target tile value to win
export const TARGET_TILE = 2048;

// Direction mappings for keyboard
export const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

// Keyboard key codes
export const KEY_CODES = {
  ArrowUp: DIRECTIONS.UP,
  ArrowDown: DIRECTIONS.DOWN,
  ArrowLeft: DIRECTIONS.LEFT,
  ArrowRight: DIRECTIONS.RIGHT,
  w: DIRECTIONS.UP,
  s: DIRECTIONS.DOWN,
  a: DIRECTIONS.LEFT,
  d: DIRECTIONS.RIGHT,
  W: DIRECTIONS.UP,
  S: DIRECTIONS.DOWN,
  A: DIRECTIONS.LEFT,
  D: DIRECTIONS.RIGHT
};

// Game states
export const GAME_STATUS = {
  PLAYING: 'PLAYING',
  WON: 'WON',
  LOST: 'LOST'
};

// Initial number of tiles on board
export const INITIAL_TILES_COUNT = 2;