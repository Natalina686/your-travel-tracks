# Your Travel Tracks 🌍

**Your Travel Tracks** is a web application for browsing and booking campervans. Built with React, Vite, Redux, React Router, and localStorage for saving user favorites.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or Yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Natalina686/your-travel-tracks.git
    cd your-travel-tracks
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open in your browser:

    ```
    http://localhost:3000
    ```

---

## 📁 Project Structure

```text
/
├─ public/
│   └─ index.html            — Base HTML file
├─ src/
│   ├─ components/           — Shared UI components
│   ├─ pages/
│   │   ├─ CamperCard.jsx    — Camper preview card
│   │   └─ CamperDetails.jsx — Detailed camper view
│   ├─ redux/
│   │   ├─ campersSlice.js
│   │   └─ favoritesSlice.js
│   ├─ App.jsx               — Main app with routing
│   └─ index.jsx             — Entry point
├─ package.json
├─ vite.config.js
└─ README.md

