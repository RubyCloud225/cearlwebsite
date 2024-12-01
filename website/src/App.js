import React from 'react';
import Navbar from './components/Navbar';
import Home from '../../websiterecreation/src/pages/Home';
import Goalsetting from '../../websiterecreation/src/pages/Strategy/goal_setting';
import Marketanalysis from '../../websiterecreation/src/pages/Strategy/Market_Analysis';
import Resourceallocation from '../../websiterecreation/src/pages/Strategy/resource-allocation';
import Processimprovement from '../../websiterecreation/src/pages/operational/process_improvement';
import Technology from '../../websiterecreation/src/pages/operational/technology';
import Design from '../../websiterecreation/src/pages/softwaredevelopment/design';
import Supplychain from '../../websiterecreation/src/pages/operational/supplychain';
import Implementation from '../../websiterecreation/src/pages/softwaredevelopment/implementation';
import Workforcemanagement from '../../websiterecreation/src/pages/operational/workforcemanagement';
import Contact from '../../websiterecreation/src/pages/about/contact';
import Mission from '../../websiterecreation/src/pages/about/mission';
import Requirementsgathering from '../../websiterecreation/src/pages/softwaredevelopment/requirements_gathering';
import Mystory from '../../websiterecreation/src/pages/about/my_story';
import Financialservices from '../../websiterecreation/src/pages/industries/financialservices';
import Fashion from '../../websiterecreation/src/pages/industries/fashion';
import TechnologyIndustry from '../../websiterecreation/src/pages/industries/technology';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../../websiterecreation/src/errorboundary/ErrorHandling';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="goal_setting" element={<Goalsetting />} />
            <Route path="Market_Analysis" element={<Marketanalysis />} />
            <Route path="resource-allocation" element={<Resourceallocation />} />
            <Route path="process_improvement" element={<Processimprovement />} />
            <Route path="supplychain" element={<Supplychain />} />
            <Route path="technology" element={<Technology />} />
            <Route path="workforcemanagement" element={<Workforcemanagement />} />
            <Route path="design" element={<Design />} />
            <Route path="implementation" element={<Implementation />} />
            <Route path="requirements_gathering" element={<Requirementsgathering />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mission" element={<Mission />} />
            <Route path="my_story" element={<Mystory />} />
            <Route path="financialservices" element={<Financialservices />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="technology" element={<TechnologyIndustry />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;