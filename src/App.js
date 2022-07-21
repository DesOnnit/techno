
import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from './organisms/Footer/Footer';
import Header from "./molecules/header/header";
import Services from './organisms/Services/Services';
import Projects from './organisms/Projects/Projects';

function App() {
  return (
          <div className="App">
              <Header/>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/services" element={<Services cub={true} />}></Route>
                  <Route path="/projects" element={<Projects cub={true} page={12} />}></Route>
              </Routes>
              <Footer/>
          </div>
  );
}

export default App;
