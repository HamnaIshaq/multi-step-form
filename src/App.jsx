import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import ThankYou from './pages/ThankYou';
import Error from './pages/Error';

const App = () => {

  const [userPlan, setUserPlan] = useState({ plan: 'arcade', planCost: 9 });
  const [userAddOns, setUserAddOns] = useState([ {addon: 'Online service', cost: 1}, {addon: 'Larger storage', cost: 2} ]);
  const [planTypeYearly, setPlanTypeYearly] = useState(false);

  const planCostMonthly = { arcade: 9, advanced: 12, pro: 15 };
  const planCostYearly = { arcade: 90, advanced: 120, pro: 150 };

  const addOnsMonthly = { "Online service": 1, "Larger storage": 2, "Customizable profile": 2 };
  const addOnsYearly = { "Online service": 10, "Larger storage": 20, "Customizable profile": 20 };

  return (
    <main className="main-container">
      <div className="desktop-layout-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout/>}>
              <Route index element={<PersonalInfo/>}/>
              <Route path="/selectplan" element={
                <SelectPlan 
                  planCostMonthly={planCostMonthly}
                  planCostYearly={planCostYearly}
                  userPlan={userPlan} 
                  setUserPlan={setUserPlan} 
                  planTypeYearly={planTypeYearly} 
                  setPlanTypeYearly={setPlanTypeYearly}
                  userAddOns={userAddOns} 
                  setUserAddOns={setUserAddOns}/>}
                />
              <Route path="/addons" element={
                <AddOns 
                  addOnsMonthly={addOnsMonthly}
                  addOnsYearly={addOnsYearly}
                  userAddOns={userAddOns} 
                  setUserAddOns={setUserAddOns} 
                  planTypeYearly={planTypeYearly}/>}
                />
              <Route path="/summary" element={
                <Summary 
                  userPlan={userPlan} 
                  setUserPlan={setUserPlan} 
                  userAddOns={userAddOns} 
                  setUserAddOns={setUserAddOns}
                  planTypeYearly={planTypeYearly}/>}
                />
              <Route path="/thankyou" element={<ThankYou/>}/>
            </Route>
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
    
  )
}
export default App