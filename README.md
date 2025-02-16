# AUC/Movie Predicts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview
This is a simple React application with **two child components**:
1. **AUC School Prediction** – Cycles through multiple schools in the AUC.
2. **Movie Prediction** – Cycles through multiple popular movies.

### How It Works
- The **Parent component** holds arrays of items (school or movie objects) and tracks which one to display via React state.
- Each **Child component** shows the current prediction (text & image) and includes a button that tells the **Parent** to switch to the next array item.

---

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
Your app is ready to be deployed!

### `npm run eject`
**Note**: this is a one-way operation. Once you `eject`, you can’t go back!  
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.  
This command will remove the single build dependency from your project.

---

## Getting Started

1. **Clone or Download** this repository.
2. In your project folder, install dependencies:
   npm install
3. Start the Development Server
   npm start
4. Open your browser to http://localhost:3000 if it doesnt open automatically.
5. Click the "Change Prediction" buttons in each child component to cycle through different schools or movies.
