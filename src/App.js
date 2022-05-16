import logo from "./logo.svg";
import "./App.css";
import Header from "./Headercomponent/Header";
// import Footer from "./footercomponent/Footer";
// import Leftsidebar from "./Leftsidebarcomponent/Leftsidebar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;


