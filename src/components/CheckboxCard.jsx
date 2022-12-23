const RadioCard = ({ userAddOns, setUserAddOns }) => {

  const onAddOnSelection = (e) => {
    if(e.target.checked === true) {
      setUserAddOns(addOns => [...addOns, {addon: e.target.value, cost: parseInt(e.target.getAttribute('data-addon-cost'))}]);
      return;
    }
    const filteredAddOns = userAddOns.filter(item => item.addon !== e.target.value);
    setUserAddOns(filteredAddOns);
  }

  return (
    <fieldset className="radio-input-container">
      <div>
        <input type="checkbox" name="addon" id="online-service" className="checkbox-input" value="online service" data-addon-cost="1" onClick={onAddOnSelection}/>
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
        <input type="checkbox" name="addon" id="larger-storage" className="checkbox-input" value="larger storage" data-addon-cost="2" onClick={onAddOnSelection}/>
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
        <input type="checkbox" name="addon" id="custom-profile" className="checkbox-input" value="custom profile" data-addon-cost="2" onClick={onAddOnSelection}/>
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