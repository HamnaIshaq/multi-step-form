import { Link } from 'react-router-dom';

const SummaryInfo = ({ userPlan, setUserPlan, userAddOns, setUserAddOns }) => {
  let totalCost = userPlan.planCost;

  const planAndAddOns = userAddOns.map((addon, index) => {
    totalCost += addon.cost;
    return <div key={index} className="flex justify-space-between align-center summary-addons-container">
      <span className="cool-gray-color font-size-14px font-family-ubuntu-regular">{addon.addon.charAt(0).toUpperCase() + addon.addon.slice(1)}</span>
      <span className="marine-blue-color summary-plan-cost">+${addon.cost}/<abbr className="plan-duration" title="month">mo</abbr></span>
    </div>});

  const changeUserService = () => {
    setUserPlan({ plan: '', planCost: null });
    setUserAddOns([]);
  }

  return (
    <div>
      <div className="summary-info">
        <div className="padding-one-and-a-half-em">
          <div className="flex justify-space-between summary-plan-container">
            <div className="summary-info-container flex flex-vertical">
              <strong className="marine-blue-color font-family-ubuntu-medium text-capitalize-first">{userPlan.plan}(Monthly)</strong>
              <Link to="/selectplan">
                <button type="button" className="btn next-btn back-btn cool-gray-color change-plan-btn font-family-ubuntu-regular" onClick={changeUserService}>Change</button>
              </Link>
            </div>
            <span className="plan-cost marine-blue-color summary-plan-cost">${userPlan.planCost}/<abbr className="plan-duration" title="month">mo</abbr></span> 
          </div>
          {planAndAddOns}
        </div>
      </div>
      <div className="flex justify-space-between align-center padding-one-and-a-half-em summary-total-cost-container">
        <span className="cool-gray-color font-size-14px font-family-ubuntu-regular">Total (per month)</span>
        <span className="summary-plan-cost font-family-ubuntu-bold purplish-blue-color">+${totalCost}/<abbr className="plan-duration" title="month">mo</abbr></span>
      </div>
    </div>
  );
}

export default SummaryInfo;