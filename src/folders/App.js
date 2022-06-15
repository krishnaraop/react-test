import Dmn from "./DMNeditor/editor";
// import "../components/DMNeditor/editor.css";
import LeftSidebar from "./LeftSidebar";
import TopNavbar from "./TopNavbar";
import System from "./System";
import ComponentRoot from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Close from "../close";

function App() {
  return (
    <>
      <div className="row">
        <TopNavbar />{" "}
      </div>
      <div className="row">
        <LeftSidebar />
      </div>
      <hr />
      {/* <Close /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Dashboard />}></Route>
          <Route path="/system" element={<Empty />}></Route>
          <Route path="/components" element={<ComponentRoot />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
