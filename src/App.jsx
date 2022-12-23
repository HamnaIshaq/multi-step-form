import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import ThankYou from './pages/ThankYou';
import Error from './pages/Error';
import Sidebar from './components/Sidebar';
import FormFooter from './components/FormFooter';


const App = () => {

  const [userPlan, setUserPlan] = useState({ plan: '', planCost: null });
  const [userAddOns, setUserAddOns] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<PersonalInfo/>}/>
          <Route path="/selectplan" element={<SelectPlan userPlan={userPlan} setUserPlan={setUserPlan}/>}/>
          <Route path="/addons" element={<AddOns userAddOns={userAddOns} setUserAddOns={setUserAddOns}/>}/>
          <Route path="/summary" element={<Summary userPlan={userPlan} setUserPlan={setUserPlan} userAddOns={userAddOns} setUserAddOns={setUserAddOns}/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App