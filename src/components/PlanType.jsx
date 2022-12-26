const PlanType = ({planTypeYearly, setPlanTypeYearly, userPlan, setUserPlan, planCostMonthly, planCostYearly, userAddOns, setUserAddOns}) => {

  const addOnsMonthly = { "Online service": 1, "Larger storage": 2, "Customizable profile": 2 };
  const addOnsYearly = { "Online service": 10, "Larger storage": 20, "Customizable profile": 20 };

  const onPlanTypeSelection = (e) => {
    setPlanTypeYearly(e.target.checked);

    if(e.target.checked) {
      for(let plan in planCostYearly) {
        if(userPlan.plan === plan)
          setUserPlan({ plan: plan, planCost: planCostYearly[plan] });
      }

      let arr = [];
      for(let addon in addOnsYearly) {
        userAddOns.forEach(selectedAddOn => {
          if(selectedAddOn.addon === addon)
            arr.push({ addon: addon, cost: addOnsYearly[addon] }); 
          
        })      
      }
      setUserAddOns(arr);

      return;
    }
    for(let plan in planCostMonthly) {
      if(userPlan.plan === plan)
        setUserPlan({ plan: plan, planCost: planCostMonthly[plan] });
    }

    let arr = [];
      for(let addon in addOnsMonthly) {
        userAddOns.forEach(selectedAddOn => {
          if(selectedAddOn.addon === addon)
            arr.push({ addon: addon, cost: addOnsMonthly[addon] }); 
          
        })      
      }
      setUserAddOns(arr);

  }

  return (
    <div className="summary-info padding-1-em">
      <input 
        type="checkbox" 
        name="switch" 
        id="switch" 
        className="switch-checkbox"
        checked={planTypeYearly}
        onChange={onPlanTypeSelection}
      />
      <label htmlFor="switch" className="switch-label flex align-center justify-center">
        <span>Monthly</span>
        <div className="switch-slider"></div>
        <span>Yearly</span>
      </label>
    </div>
  );
}

export default PlanType;