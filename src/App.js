import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from './organisms/Footer/Footer';
import Header from "./molecules/header/header";
import Services from './organisms/Services/Services';
import Projects from './organisms/Projects/Projects';
import Clients from './pages/Clients/Clients';
import Investments from "./pages/Investments/Investments";
import AboutUs from "./pages/aboutUs/aboutUs";
import Contacts from './pages/Contacts/Contacts';
import Partners from './pages/Partners/Partners';
import { Provider } from 'react-redux';
import {store} from './store'
import Invest from './molecules/invest/invest';
import Call from './molecules/call/call';
function App() {
  return (
          <div className="App">
            <Provider store={store}>
              <Header/>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/services" element={<Services cub={true} />}></Route>
                  <Route path="/projects" element={<Projects cub={true} page={12} />}></Route>
                  <Route path="/clients" element={<Clients/>}></Route>
                  <Route path="/investments" element={<Investments/>}></Route>
                  <Route path="/aboutUs" element={<AboutUs/>}></Route>
                  <Route path="/partners" element={<Partners/>}></Route>
                  <Route path="/contacts" element={<Contacts/>}></Route>
              </Routes>
              <Footer/>
              <Invest/>
              <Call/>
              </Provider>
          </div>
  );
}

export default App;
