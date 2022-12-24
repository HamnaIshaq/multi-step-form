
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import RadioCard from '../components/RadioCard';
import PlanType from '../components/PlanType';

const SelectPlan = ({ userPlan, setUserPlan }) => {
  return (
    <div>
      <Card heading="Select your plan" description="You have the option of monthly or yearly billing.">
        <fieldset className="radio-input-container">
          <RadioCard userPlan={userPlan} setUserPlan={setUserPlan}/>
          <PlanType />
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