import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header'; 
import BodyLayout from './components/BodyLayout ';
import LoginPage from './components/LoginPage ';
import AvailableTasks from './components/AvailableTasks';
import TaskDetailsPage from './components/TaskDetailsPage';
const App = () => {
  return (
    <Router> 
      <Header />
      <Routes> 
        <Route path="/" element={<BodyLayout />} /> 
        <Route path="/available-tasks" element={<AvailableTasks />} />
        <Route path="/task/:taskId" element={<TaskDetailsPage />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
};
export default App;
