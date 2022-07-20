import "./App.scss"
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./molecules/header/header";



function App() {
  return (
          <div className="App">
              <Header/>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
              </Routes>
          </div>
  );
}

export default App;
