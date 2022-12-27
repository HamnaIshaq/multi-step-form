
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CheckboxCard from '../components/CheckboxCard';

const AddOns = ({ userAddOns, setUserAddOns, planTypeYearly }) => {
  const addOnsMonthly = { "Online service": 1, "Larger storage": 2, "Customizable profile": 2 };
  const addOnsYearly = { "Online service": 10, "Larger storage": 20, "Customizable profile": 20 };

  return (
    <div className="form-container">
      <Card heading="Pick add-ons" description="Add-ons help enhance your gaming experience.">
        <CheckboxCard 
          userAddOns={userAddOns} 
          setUserAddOns={setUserAddOns} 
          addOnsMonthly={addOnsMonthly} 
          addOnsYearly={addOnsYearly} 
          planTypeYearly={planTypeYearly}
        />
      </Card>
      <div className="form-footer-container flex justify-space-between">
        <Link to="/selectplan">
          <button type="button" className="btn next-btn back-btn">Go Back</button>
        </Link>
        <Link to="/summary">
          <button type="button" className="btn next-btn">Next Step</button>
        </Link>
      </div>
    </div>
  );
}

export default AddOns;