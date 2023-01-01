import { Link } from 'react-router-dom';
import Card from '../components/Card';
import RadioCard from '../components/RadioCard';
import PlanType from '../components/PlanType';

const SelectPlan = ({ planCostMonthly, planCostYearly, userPlan, setUserPlan, planTypeYearly, setPlanTypeYearly, userAddOns, setUserAddOns }) => {

  return (
    <div className="form-container">
      <Card heading="Select your plan" description="You have the option of monthly or yearly billing.">
        <fieldset className="radio-input-container">
          <RadioCard 
            userPlan={userPlan} 
            setUserPlan={setUserPlan} 
            planTypeYearly={planTypeYearly} 
            planCostMonthly={planCostMonthly} 
            planCostYearly={planCostYearly}
          />
          <PlanType 
            planTypeYearly={planTypeYearly} 
            setPlanTypeYearly={setPlanTypeYearly} 
            userPlan={userPlan} 
            setUserPlan={setUserPlan} 
            planCostMonthly={planCostMonthly} 
            planCostYearly={planCostYearly} 
            userAddOns={userAddOns} 
            setUserAddOns={setUserAddOns}
          />
        </fieldset>
      </Card>

      <div className="form-footer-container flex justify-space-between">
        <Link to="/">
          <button type="button" className="btn next-btn back-btn">Go Back</button>
        </Link>
        <Link to="/addons">
          <button type="button" className="btn next-btn">Next Step</button>
        </Link>
      </div>
    </div>

  );
}

export default SelectPlan;