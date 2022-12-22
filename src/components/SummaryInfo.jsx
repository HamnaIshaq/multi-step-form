import { Link } from 'react-router-dom';

const SummaryInfo = () => {
  return (
    <div>
      <div className="summary-info">
        <div className="padding-one-and-a-half-em">
          <div className="flex justify-space-between" style={{ borderBottom: '2px solid var(--neutralLightGray)', paddingBottom: '.75em' }}>
            <div className="summary-info-container flex flex-vertical">
              <strong className="marine-blue-color font-family-ubuntu-medium">Arcade(Monthly)</strong>
              <Link to="/selectplan">
                <button type="button" className="btn next-btn back-btn cool-gray-color change-plan-btn font-family-ubuntu-regular">Change</button>
              </Link>
            </div>
            <span className="plan-cost marine-blue-color summary-plan-cost">$9/<abbr className="plan-duration" title="month">mo</abbr></span> 
          </div>
          <div className="flex justify-space-between align-center" style={{marginTop: '1em'}}>
            <span className="cool-gray-color font-size-14px font-family-ubuntu-regular">Online service</span>
            <span className="marine-blue-color summary-plan-cost">+$1/<abbr className="plan-duration" title="month">mo</abbr></span>
          </div>
          <div className="flex justify-space-between align-center" style={{marginTop: '1em'}}>
            <span className="cool-gray-color font-size-14px font-family-ubuntu-regular">Larger storage</span>
            <span className="marine-blue-color summary-plan-cost">+$2/<abbr className="plan-duration" title="month">mo</abbr></span>
          </div>
        </div>
      </div>
      <div className="flex justify-space-between align-center padding-one-and-a-half-em" style={{marginTop: '.5em', paddingBottom: '0'}}>
        <span className="cool-gray-color font-size-14px font-family-ubuntu-regular">Total (per month)</span>
        <span className="summary-plan-cost font-family-ubuntu-bold purplish-blue-color">+$12/<abbr className="plan-duration" title="month">mo</abbr></span>
      </div>
    </div>
  );
}

export default SummaryInfo;