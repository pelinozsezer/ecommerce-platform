import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"; // veya doğru dizin neyse

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
