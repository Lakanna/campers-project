import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/campers" element={<div>List of campers page</div>} />
        <Route
          path="/campers/:campersId"
          element={<div>Selected camper page</div>}
        />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </>
  );
}

export default App;
