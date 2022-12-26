import { useEffect } from "react";

const CheckboxCard = ({ userAddOns, setUserAddOns, addOnsMonthly, addOnsYearly, planTypeYearly }) => {

  const checkSelected = (value) => {
    const val = userAddOns.find(item => item.addon === value);
    
    const selectedCheckbox = val ? val.addon : null;
    return selectedCheckbox !== null ? true : false;
  }

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
        <input 
          type="checkbox" 
          name="addon" 
          id="online-service" 
          className="checkbox-input" 
          value="Online service" 
          data-addon-cost={planTypeYearly ? addOnsYearly["Online service"] : addOnsMonthly["Online service"] }
          checked={checkSelected("Online service")}
          onChange={onAddOnSelection}/>
        <label htmlFor="online-service" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Online service</span>
              <span className="card-description addons-service-perk">Access to multiplayer games</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+${planTypeYearly ? addOnsYearly["Online service"] : addOnsMonthly["Online service"]}/<abbr className="plan-duration" title={planTypeYearly ? "year" : "month" }>{planTypeYearly ? "yr" : "mo" }</abbr></span>
        </label>
      </div>

      <div>
        <input 
        type="checkbox" 
        name="addon" 
        id="larger-storage" 
        className="checkbox-input" 
        value="Larger storage" 
        data-addon-cost={planTypeYearly ? addOnsYearly["Larger storage"] : addOnsMonthly["Larger storage"]} 
        checked={checkSelected("Larger storage")}
        onChange={onAddOnSelection}/>
        <label htmlFor="larger-storage" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Larger storage</span>
              <span className="card-description addons-service-perk">Extra 1TB of cloud save</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+${planTypeYearly ? addOnsYearly["Larger storage"] : addOnsMonthly["Larger storage"]} /<abbr className="plan-duration" title={planTypeYearly ? "year" : "month"}>{planTypeYearly ? "yr" : "mo"} </abbr></span>
        </label>
      </div>

      <div>
        <input 
        type="checkbox" 
        name="addon" 
        id="custom-profile" 
        className="checkbox-input" 
        value="Customizable profile" 
        data-addon-cost={planTypeYearly ? addOnsYearly["Customizable profile"] : addOnsMonthly["Customizable profile"]}
        checked={checkSelected("Customizable profile")}
        onChange={onAddOnSelection}/>
        <label htmlFor="custom-profile" className="input-field selection-input-card checkbox-field-label">        
          <div className="plan-details add-ons-service-details">
            <div className="addons-service-description">
              <span className="plan-name">Customizable profile</span>
              <span className="card-description addons-service-perk">Custom theme on your profile</span>
            </div>
          </div>
          <span className="addons-service-cost margin-left-auto">+${planTypeYearly ? addOnsYearly["Customizable profile"] : addOnsMonthly["Customizable profile"]}/<abbr className="plan-duration" title={planTypeYearly ? "year" : "month"}>{planTypeYearly ? "yr" : "mo"}</abbr></span>
        </label>
      </div>

    </fieldset>
  );
}

export default CheckboxCard;