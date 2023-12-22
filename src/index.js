import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./Artist.js"
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './navbar';
import Insert from './Insert.js';
import List from './List.js';

export default function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="artist/*" element={<Artist />}/>
          <Route path="insert" element={<Insert />}/>
          <Route path="list" element={<List />}/>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
