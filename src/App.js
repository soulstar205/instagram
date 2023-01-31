import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login/login';
import UserList from './pages/posts/post';
import ThankYouPage from './pages/thanks/thanks';
// import Congrats from './Congrats';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/users"  element={<UserList/>}/> 
          <Route path="/thanks" element ={<ThankYouPage/>}/>
          <Route  path="/login47cce216-301f-4bb4-a266-f4a03dea2a78" element={<Login />} />
          <Route  path="/" element={<p>Welcome to the the instagram vote page</p>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
  