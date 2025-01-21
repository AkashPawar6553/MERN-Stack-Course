import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./Pages/ContactUS";
import './CSS/Style.css';
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
function App() {
  return (
    <div>
      
      <BrowserRouter> 
        <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
        </Routes>
      
      </BrowserRouter>
    </div> 
  );
}

export default App;
