
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import RadioCard from '../components/RadioCard';

const SelectPlan = () => {
  return (
    <div>
      <Card heading="Select your plan" description="You have the option of monthly or yearly billing.">
        <RadioCard/>
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