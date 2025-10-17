**TileFusion**
==============

**TileFusion** is a **modern, visually stunning** web application built with React that brings the classic 2048 puzzle game to life with a sleek, **pitch-black interface** featuring glowing gradient tiles, smooth Framer Motion animations, and an immersive gaming experience. The application boasts an interactive **dark-themed particle background**, elegant **glassmorphism** effects, and fully responsive design --- all styled with ⚡ **Tailwind CSS** and premium **gradient aesthetics**.

* * * * *

🔴 Live
-------

👉 **Play Now**: <https://tile-fusion-jet.vercel.app/>

* * * * *

📚 Table of Contents
--------------------

-   🚀 Features
-   🛠️ Tech Stack
-   ✅ Prerequisites
-   🧩 Installation
-   🗂️ Project Structure
-   🧑‍💻 Usage & How to Play
-   🎮 Game Mechanics
-   📱 Responsive Design
-   🐞 Troubleshooting
-   🤝 Contributing
-   📄 License

* * * * *

🚀 Features
-----------

-   **🎮 Classic 2048 Gameplay**:

    -   ✅ Combine tiles to reach 2048
    -   🎯 Real-time score tracking
    -   👑 Best score persistence
    -   🏁 Win and game over detection
-   **⌨️ Multi-Input Support**:

    -   🎮 Arrow key controls (desktop)
    -   📱 Touch swipe gestures (mobile)
    -   🖱️ Keyboard event listeners for smooth gameplay
-   **🎨 Visual Design**:

    -   🌟 Glowing gradient title with neon effects
    -   🎬 Framer Motion animations for tile movements and appearances
    -   🪐 Interactive particle background for immersive atmosphere
    -   🧊 Glassmorphism with translucent, blurred components
    -   💎 Progressive tile darkening - tiles get darker as values increase
    -   ✨ Premium white glow effects on all tiles
-   **📈 Score System**:

    -   📊 Current score display
    -   🎯 New Game button for instant restart
-   **📱 Responsive Design**:

    -   📲 Mobile-friendly layout with Tailwind responsive classes
    -   🧱 Adaptive grid sizing for all screen sizes
    -   👆 Touch gesture support for mobile players
-   **♿ Accessibility**:

    -   ✅ Semantic HTML structure
    -   🔁 Full keyboard navigation support
    -   🎯 Clear visual feedback for all interactions

* * * * *

🛠️ Tech Stack
--------------

### ⚛️ Frontend:

-   **React** -- UI library
-   **React Hooks** -- State management (useState, useCallback)
-   **Framer Motion** -- Smooth animations and transitions
-   **Tailwind CSS** -- Utility-first CSS styling
-   **JavaScript ES6+** -- Modern JavaScript

### 🎨 Styling:

-   **Gradient Backgrounds** -- Linear gradients for modern look
-   **CSS Animations** -- Keyframe animations for tile effects
-   **Glassmorphism** -- Blurred, translucent UI effects
-   **Responsive Breakpoints** -- Mobile-first design


* * * * *

✅ Prerequisites
---------------

-   Node.js (v16+) and npm (v8+)
-   Git (optional)
-   Modern browser with ES6+ support
-   Basic understanding of React hooks

* * * * *

🧩 Installation
---------------

1.  **📥 Clone the Repository**:

    ```
    git clone https://github.com/your-username/tilefusion.git
    cd tilefusion

    ```

2.  **📦 Install Dependencies**:

    ```
    npm install

    ```

    Core dependencies:

    ```
    {
      "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "framer-motion": "^10.12.16"
      },
      "devDependencies": {
        "tailwindcss": "^3.3.0",
        "postcss": "^8.4.0",
        "autoprefixer": "^10.4.0"
      }
    }

    ```

3.  **🎨 Tailwind CSS Setup**:

    ```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    ```

    Update `tailwind.config.js`:

    ```
    module.exports = {
      content: ['./src/**/*.{js,jsx}', './public/index.html'],
      theme: {
        extend: {
          colors: {
            'cyan-glow': '#00d4ff',
            'blue-dark': '#0066ff',
            'navy-dark': '#0033cc',
          },
          fontFamily: {
            sans: ['Arial', 'Helvetica Neue', 'sans-serif'],
          },
          animation: {
            'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'glow': 'whiteGlow 2s ease-in-out infinite',
          },
        },
      },
      plugins: [],
    };

    ```

4.  **🧬 Create Project Structure**:

    ```
    src/
    ├── pages/
    │   └── Game.jsx
    │   ├── GameBoard.jsx
    │   ├── Tile.jsx
    │   └── ScoreBoard.jsx
    ├── hooks/
    │   └── useGameLogic.js
    │   ├── constants.js
    │   └── gameHelpers.js
    ├── styles/
    │   ├── Game.css
    │   ├── Tile.css
    ├── App.js
    └── index.js

    ```

5.  **🔧 Configure Development Entry (`src/index.js`)**:

    ```
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './styles/index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    ```

6.  **🧪 Run Dev Server**:

    ```
    npm start

    ```

    Open in browser:

    -   **Vite**: `http://localhost:5173`
    -   **CRA**: `http://localhost:3000`
7.  **🚀 Build for Production**:

    ```
    npm run build

    ```

* * * * *

🗂️ Project Structure
---------------------

```
tilefusion/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx       # 4x4 grid renderer
│   │   ├── Tile.jsx            # Individual tile component
│   │   └── ScoreBoard.jsx       # Score & best score display
│   ├── hooks/
│   │   └── useGameLogic.js      # Core game logic (state + functions)
│   ├── pages/
│   │   └── Game.jsx            # Main game page
│   ├── styles/
│   │   ├── Game.css            # Page-level styles
│   │   ├── Tile.css            # Tile animations & gradients
│   │   └── index.css           # Global styles
│   ├── utils/
│   │   ├── constants.js        # Game configuration & colors
│   │   └── gameHelpers.js      # Grid utilities (transpose, rotate, etc.)
│   ├── App.jsx                 # Main app wrapper
│   └── main.jsx                # React entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js              # or webpack config for CRA
└── README.md

```

* * * * *

🧑‍💻 Usage & How to Play
-------------------------

### Starting the Game:

1.  🎮 Open the application in your browser
2.  📊 View your current score and best score
3.  🎯 Click **"New Game"** to start fresh

### Game Controls:

**Desktop:**

-   ⬅️ **Left Arrow** -- Move tiles left
-   ➡️ **Right Arrow** -- Move tiles right
-   ⬆️ **Up Arrow** -- Move tiles up
-   ⬇️ **Down Arrow** -- Move tiles down

**Mobile:**

-   👆 **Swipe Left** -- Move tiles left
-   👆 **Swipe Right** -- Move tiles right
-   👆 **Swipe Up** -- Move tiles up
-   👆 **Swipe Down** -- Move tiles down

### Game Rules:

1.  🎲 Each move spawns a new tile (value 2 or 4)
2.  🔀 When two tiles with the same value collide, they merge into one
3.  📈 Merged tile value = sum of both tiles
4.  🏆 Goal: Reach the 2048 tile
5.  🏁 Game ends when no moves are possible
6.  🔄 Click **"New Game"** to restart anytime

### Scoring:

-   Points awarded equal to the merged tile value

* * * * *



🎮 Game Mechanics
-----------------

### Core Logic (`useGameLogic.js`):

-   **Board State**: 4x4 2D array representing game grid
-   **Move Logic**: Handles left, right, up, down movements
-   **Merge Logic**: Combines tiles with same value
-   **Spawn Logic**: Randomly adds new tile (90% chance: 2, 10% chance: 4)
-   **Win Condition**: Detects when 2048 tile is reached
-   **Game Over**: Detects when no valid moves remain
-   **Score Calculation**: Tracks current score and best score

### Helper Functions (`gameHelpers.js`):

-   `transpose()` -- Convert rows to columns
-   `reverseRow()` -- Reverse tile order
-   `rotateGrid()` -- Rotate board 90°
-   `getRandomEmptyCell()` -- Find random empty position
-   `canMove()` -- Check if movement is possible

### Game Flow:

```
Initialize Board → Display Grid → Wait for Input
→ Execute Move → Spawn New Tile → Check Win/Lose
→ Update Score → Repeat

```

* * * * *

📱 Responsive Design
--------------------

### Breakpoints:

-   **Desktop** (> 1024px): Large 100px tiles with 2rem font
-   **Tablet** (600px - 1024px): Medium 70px tiles with 1.5rem font
-   **Mobile** (< 600px): Small 60px tiles with 1.2rem font
-   **Extra Small** (< 400px): Tiny tiles with reduced font sizes

### Mobile Features:

-   Touch swipe gesture detection
-   Optimized touch targets (min 44x44px)
-   Full-screen responsive layout
-   Adaptive spacing and padding
-   Touch-friendly buttons

* * * * *

🐞 Troubleshooting
------------------

| Issue 🛑 | Fix ✅ |
| --- | --- |
| Tiles not animating | Ensure Framer Motion is installed and CSS keyframes loaded |
| Score not persisting | Check localStorage permissions in browser settings |
| Swipe gestures not working | Verify touch event listeners in Game.jsx |
| Tailwind styles not applying | Run `npm run build` and check tailwind.config.js |
| Background not full screen | Ensure `html`, `body`, `.App` have 100vh/100vw |
| Keyboard events not working | Confirm Game.jsx has event listener with focus management |
| Dark mode not showing | Clear browser cache and rebuild project |

* * * * *

🤝 Contributing
---------------

1.  🍴 Fork this repository
2.  🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3.  💾 Commit your changes: `git commit -m 'Add amazing feature'`
4.  📤 Push to your fork: `git push origin feature/amazing-feature`
5.  🔁 Open a Pull Request

Please ensure:

-   Code follows existing style conventions
-   All features are tested on desktop and mobile
-   README is updated if new features are added
-   Commits have clear, descriptive messages

* * * * *

📄 License
----------

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

* * * * *

🌟 Future Enhancements
----------------------

-   🔐 User accounts & leaderboard (cloud persistence)
-   🎵 Background music & sound effects
-   🎨 Multiple theme options (dark, light, neon)
-   ⚙️ Difficulty levels (smaller boards, faster spawn)
-   📊 Game statistics & analytics
-   🌐 Multiplayer mode
-   🏆 Achievements & badges
-   🎮 Different game modes (reverse, survival, etc.)

* * * * *

👨‍💻 Development Credits
-------------------------

Built by [Shubham Malhotra]

* * * * *

🎮 **TileFusion** -- Merge, combine, and conquer! Reach 2048 and become a master of tiles!

* * * * *
