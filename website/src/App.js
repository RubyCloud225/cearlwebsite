/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Goal_setting from './pages/Strategy/goal_setting';
import Market_Analysis from './pages/Strategy/Market_Analysis';
import Resource_allocation from './pages/Strategy/resource-allocation';
import Process_improvement from './pages/operational/process_improvement';
import Technology from './pages/operational/technology';
import Design from './pages/softwaredevelopment/design';
import Supplychain from './pages/operational/supplychain';
import Implementation from './pages/softwaredevelopment/implementation';
import Workforcemanagement from './pages/operational/workforcemanagement';
import Contact from './pages/about/contact';
import Mission from './pages/about/mission';
import Requirements_gathering from './pages/softwaredevelopment/requirements_gathering';
import My_story from './pages/about/my_story';
import Financialservices from './pages/industries/financialservices';
import Fashion from './pages/industries/fashion';
import TechnologyIndustry from './pages/industries/technology';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="goal_setting" element={<Goal_setting />} />
          <Route path="Market_Analysis" element={<Market_Analysis />} />
          <Route path="resource-allocation" element={<Resource_allocation />} />
          <Route path="process_improvement" element={<Process_improvement />} />
          <Route path="supplychain" element={<Supplychain />} />
          <Route path="technology" element={<Technology />} />
          <Route path="workforcemanagement" element={<Workforcemanagement />} />
          <Route path="design" element={<Design />} />
          <Route path="implementation" element={<Implementation />} />
          <Route path="requirements_gathering" element={<Requirements_gathering />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mission" element={<Mission />} />
          <Route path="my_story" element={<My_story />} />
          <Route path="financialservices" element={<Financialservices />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="technology" element={<TechnologyIndustry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;