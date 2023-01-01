import { Link } from 'react-router-dom';
import Card from '../components/Card';
import SummaryInfo from '../components/SummaryInfo';

const Summary = ({ userPlan, userAddOns }) => {
  return (
    <div className="form-container">
      <Card heading="Finishing up" description="Double-check everything looks OK before confirming.">
        <SummaryInfo userPlan={userPlan} userAddOns={userAddOns}/>
      </Card>
      <div className="form-footer-container flex justify-space-between">
        <Link to="/addons">
          <button type="button" className="btn next-btn back-btn">Go Back</button>
        </Link>
        <Link to="/thankyou">
          <button type="button" className="btn next-btn confirm-btn">Confirm</button>
        </Link>
      </div>
    </div>
  );
}

export default Summary;