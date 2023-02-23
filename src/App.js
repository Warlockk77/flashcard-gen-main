import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFlashcard from "./pages/CreateFlashcard";
import MyFlashcard from "./pages/MyFlashcard";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path={"/"} element={<CreateFlashcard />} />
            <Route path={"/createnew"} element={<CreateFlashcard />} />
            <Route path={"/myflashcard"} element={<MyFlashcard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
