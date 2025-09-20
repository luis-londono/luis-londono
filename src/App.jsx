import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
