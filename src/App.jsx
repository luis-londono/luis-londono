import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Test from "./components/Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="luis-londono" element={<Home />} />
        <Route path="luis-londono/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
