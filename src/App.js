import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from './organisms/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Footer/>
        </div>
  );
}

export default App;
