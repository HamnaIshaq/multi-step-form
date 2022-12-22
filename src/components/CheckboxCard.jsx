const RadioCard = () => {
  return (
    <fieldset className="radio-input-container">
      <div>
        <input type="checkbox" name="addon" id="online-service" className="checkbox-input"/>
        <label htmlFor="online-service" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Online service</span>
              <span className="card-description addons-service-perk">Access to multiplayer games</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+$1/<abbr className="plan-duration" title="month">mo</abbr></span>
        </label>
      </div>

      <div>
        <input type="checkbox" name="addon" id="larger-storage" className="checkbox-input"/>
        <label htmlFor="larger-storage" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Larger storage</span>
              <span className="card-description addons-service-perk">Extra 1TB of cloud save</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+$2/<abbr className="plan-duration" title="month">mo</abbr></span>
        </label>
      </div>

      <div>
        <input type="checkbox" name="addon" id="custom-profile" className="checkbox-input"/>
        <label htmlFor="custom-profile" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Customizable profile</span>
              <span className="card-description addons-service-perk">Custom theme on your profile</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+$2/<abbr className="plan-duration" title="month">mo</abbr></span>
        </label>
      </div>

    </fieldset>
  );
}

export default RadioCard;