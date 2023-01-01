
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CheckboxCard from '../components/CheckboxCard';

const AddOns = ({ addOnsMonthly, addOnsYearly, userAddOns, setUserAddOns, planTypeYearly }) => {

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