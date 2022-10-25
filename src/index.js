import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/homePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import {
  ClassicSnakeGame,
  FlexPanelsGallery,
  MaDoggo,
  SpaceShot,
  Sudoku,
  ChatApp
} from './pages/projects'

const root = ReactDOM.createRoot(
  document.getElementById("root")
  );
  root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />

      <Route path="/ClassicSnakeGame" element={<ClassicSnakeGame />} />
      <Route path="/FlexPanelsGallery" element={<FlexPanelsGallery />} />
      <Route path="/MaDoggo" element={<MaDoggo />} />
      <Route path="/SpaceShot" element={<SpaceShot />} />
      <Route path="/Sudoku" element={<Sudoku />} />
      <Route path="/ChatApp" element={<ChatApp />} />
    </Routes>
  </BrowserRouter>
);
