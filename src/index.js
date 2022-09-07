import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./routes/about";
import {
  ClassicSnakeGame,
  FlexPanelsGallery,
  MaDoggo,
  SpaceShot,
  Sudoku
} from './projectPages'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const root = ReactDOM.createRoot(
  document.getElementById("root")
  );
  root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />

      <Route path="/ClassicSnakeGame" element={<ClassicSnakeGame />} />
      <Route path="/FlexPanelsGallery" element={<FlexPanelsGallery />} />
      <Route path="/MaDoggo" element={<MaDoggo />} />
      <Route path="/SpaceShot" element={<SpaceShot />} />
      <Route path="/Sudoku" element={<Sudoku />} />
    </Routes>
  </BrowserRouter>
);

// Before the routing magic
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
