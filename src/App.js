import './App.css';
import MainPage from './main.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from './components/FaqPage.jsx';
import EmailVerification from './components/emailverification.jsx';
import ThankYou from './components/thankyou.jsx';
import ForgotPassword from './components/forgotpass.jsx';
import VeriFy from './components/verify.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage />}></Route>
        <Route path='/faq' element={< FaqPage />}></Route>        
        <Route path='/emailverification' element={< EmailVerification />}></Route> 
        <Route path='/thankyou' element = {<ThankYou />}></Route>
        <Route path='/forgotpassword' element={< ForgotPassword />}></Route>  
        <Route path='/verification' element={< VeriFy/>}></Route>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
