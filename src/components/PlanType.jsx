const PlanType = () => {
  return (
    <div className="summary-info padding-1-em">
      <input type="checkbox" name="switch" id="switch" className="switch-checkbox"/>
      <label htmlFor="switch" className="switch-label flex align-center justify-center">
        <span>Monthly</span>
        <div className="switch-slider"></div>
        <span>Yearly</span>
      </label>
    </div>
  );
}

export default PlanType;