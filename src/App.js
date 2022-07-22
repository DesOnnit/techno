import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from './organisms/Footer/Footer';
import Header from "./molecules/header/header";
import Services from './organisms/Services/Services';
import Projects from './organisms/Projects/Projects';
import Clients from './pages/Clients/Clients';
import Contacts from './pages/Contacts/Contacts';


function App() {
  return (
          <div className="App">
              <Header/>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/services" element={<Services cub={true} />}></Route>
                  <Route path="/projects" element={<Projects cub={true} page={12} />}></Route>
                  <Route path="/clients" element={<Clients/>}></Route>
                  <Route path="/contacts" element={<Contacts/>}></Route>
              </Routes>
              <Footer/>
          </div>
  );
}

export default App;
