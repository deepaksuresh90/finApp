import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import  {Home}  from '../pages/home_page';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;