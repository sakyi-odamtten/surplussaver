import './App.css';
import MainPage from './main.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from './components/FaqPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage />}></Route>
        <Route path='/faq' element={< FaqPage />}></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
