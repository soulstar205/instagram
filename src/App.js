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
          <Route  path="/" element={<Login />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
  