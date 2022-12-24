import ArcadeIcon from '../assets/images/icon-arcade.svg';
import AdvancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';

const RadioCard = ({ userPlan, setUserPlan }) => {

  const onPlanSelection = (e) => {
    setUserPlan({ plan: e.target.value, planCost: parseInt(e.target.getAttribute('data-plan-cost')) });
  }

  return (
    <>
      <div>
        <input type="radio" id="plan-arcade" name="plan" className="radio-input" value="arcade" data-plan-cost="9" onClick={onPlanSelection}/>
        <label htmlFor="plan-arcade" className="input-field selection-input-card">
          <img className="plan-img" src={ArcadeIcon} alt="game" />
          <div className="plan-details">
            <span className="plan-name">Arcade</span>
            <span className="plan-cost">$9/<abbr className="plan-duration" title="month">mo</abbr></span>
            <span className="input-label plan-free-duration hide">2 months free</span>
          </div>
        </label>
      </div>

      <div>
        <input type="radio" id="plan-advanced" name="plan" className="radio-input" value="advanced" data-plan-cost="12" onClick={onPlanSelection}/>
        <label htmlFor="plan-advanced" className="input-field selection-input-card">
        <img className="plan-img" src={AdvancedIcon} alt="game" />
        <div className="plan-details">
          <span className="plan-name">Advanced</span>
          <span className="plan-cost">$12/<abbr className="plan-duration" title="month">mo</abbr></span>
          <span className="input-label plan-free-duration hide">2 months free</span>
        </div>
      </label>
      </div>

      <div>
        <input type="radio" id="plan-pro" name="plan" className="radio-input" value="pro" data-plan-cost="15" onClick={onPlanSelection}/>
          <label htmlFor="plan-pro" className="input-field selection-input-card">
          <img className="plan-img" src={ProIcon} alt="game" />
          <div className="plan-details">
            <span className="plan-name">Pro</span>
            <span className="plan-cost">$15/<abbr className="plan-duration" title="month">mo</abbr></span>
            <span className="input-label plan-free-duration hide">2 months free</span>
          </div>
        </label>
      </div>
      
    </>
  );
}

export default RadioCard;