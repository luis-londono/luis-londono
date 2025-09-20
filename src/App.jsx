import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Test from "./components/Test";

const App = () => {
  return (
    <Router basename="/luis-londono">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
