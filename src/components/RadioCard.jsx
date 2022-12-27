import ArcadeIcon from '../assets/images/icon-arcade.svg';
import AdvancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';

const RadioCard = ({ userPlan, setUserPlan, planTypeYearly, planCostMonthly, planCostYearly }) => {

  const onPlanSelection = (e) => {
    setUserPlan({ plan: e.target.value, planCost: parseInt(e.target.getAttribute('data-plan-cost')) });
  }
  
  return (
    <div className="plan-container">
      <div className="plan-option-container">
        <input 
          type="radio" 
          id="plan-arcade" 
          name="plan" 
          className="radio-input" 
          value="arcade" 
          data-plan-cost={planTypeYearly ? planCostYearly.arcade : planCostMonthly.arcade } 
          checked={userPlan.plan === "arcade"}
          onChange={onPlanSelection}
        />
        <label htmlFor="plan-arcade" className="input-field selection-input-card">
          <img className="plan-img" src={ArcadeIcon} alt="game" />
          <div className="plan-details">
            <span className="plan-name">Arcade</span>
            <span className="plan-cost">${planTypeYearly ? planCostYearly.arcade : planCostMonthly.arcade}/
              <abbr className="plan-duration" title={planTypeYearly ? "year" : "month" }>
                {planTypeYearly ? "yr" : "mo" }
              </abbr></span>
            <span className={`input-label plan-free-duration ${planTypeYearly ? "" : "hide"}`}>2 months free</span>
          </div>
        </label>
      </div>

      <div className="plan-option-container">
        <input 
          type="radio" 
          id="plan-advanced" 
          name="plan" 
          className="radio-input" 
          value="advanced" 
          data-plan-cost={planTypeYearly ? planCostYearly.advanced : planCostMonthly.advanced } 
          checked={userPlan.plan === "advanced"}
          onChange={onPlanSelection}
        />
        <label htmlFor="plan-advanced" className="input-field selection-input-card">
        <img className="plan-img" src={AdvancedIcon} alt="game" />
        <div className="plan-details">
          <span className="plan-name">Advanced</span>
          <span className="plan-cost">${planTypeYearly ? planCostYearly.advanced : planCostMonthly.advanced}/<abbr className="plan-duration" title={planTypeYearly ? "year" : "month" }>{planTypeYearly ? "yr" : "mo" }</abbr></span>
          <span className={`input-label plan-free-duration ${planTypeYearly ? "" : "hide"}`}>2 months free</span>
        </div>
      </label>
      </div>

      <div className="plan-option-container">
        <input 
          type="radio" 
          id="plan-pro" 
          name="plan" 
          className="radio-input" 
          value="pro" 
          data-plan-cost={planTypeYearly ? planCostYearly.pro : planCostMonthly.pro } 
          checked={userPlan.plan === "pro"}
          onChange={onPlanSelection}/>
          <label htmlFor="plan-pro" className="input-field selection-input-card">
          <img className="plan-img" src={ProIcon} alt="game" />
          <div className="plan-details">
            <span className="plan-name">Pro</span>
            <span className="plan-cost">${planTypeYearly ? planCostYearly.pro : planCostMonthly.pro}/<abbr className="plan-duration" title={planTypeYearly ? "year" : "month" }>{planTypeYearly ? "yr" : "mo" }</abbr></span>
            <span className={`input-label plan-free-duration ${planTypeYearly ? "" : "hide"}`}>2 months free</span>
          </div>
        </label>
      </div>
      
    </div>
  );
}

export default RadioCard;