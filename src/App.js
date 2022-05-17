import logo from "./logo.svg";
import "./App.css";
import Header from "./Headercomponent/Header";
// import Footer from "./footercomponent/Footer";
// import Leftsidebar from "./Leftsidebarcomponent/Leftsidebar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Studentrecord from "./Maincomponent/Studentrecord";
import Main from "./Maincomponent/Main";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/> } />
          <Route path="/studentrecord" element={<Studentrecord/> }  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


