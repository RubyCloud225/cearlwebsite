import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Goalsetting from './pages/Strategy/goal_setting';
import Marketanalysis from './pages/Strategy/Market_Analysis';
import Resourceallocation from './pages/Strategy/resource-allocation';
import Processimprovement from './pages/operational/process_improvement';
import Technology from './pages/operational/technology';
import Design from './pages/softwaredevelopment/design';
import Supplychain from './pages/operational/supplychain';
import Implementation from './pages/softwaredevelopment/implementation';
import Workforcemanagement from './pages/operational/workforcemanagement';
import Contact from './pages/about/contact';
import Mission from './pages/about/mission';
import Requirementsgathering from './pages/softwaredevelopment/requirements_gathering';
import Mystory from './pages/about/my_story';
import Financialservices from './pages/industries/financialservices';
import Fashion from './pages/industries/fashion';
import TechnologyIndustry from './pages/industries/technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './errorboundary/ErrorHandling';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goal_setting" element={<Goalsetting />} />
            <Route path="/Market_Analysis" element={<Marketanalysis />} />
            <Route path="/Resourceallocation" element={<Resourceallocation />} />
            <Route path="/Processimprovement" element={<Processimprovement />} />
            <Route path="/Supplychain" element={<Supplychain />} />
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Workforcemanagement" element={<Workforcemanagement />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Implementation" element={<Implementation />} />
            <Route path="/Requirements_gathering" element={<Requirementsgathering />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Mission" element={<Mission />} />
            <Route path="/Mystory" element={<Mystory />} />
            <Route path="/Financialservices" element={<Financialservices />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/Technology" element={<TechnologyIndustry />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
