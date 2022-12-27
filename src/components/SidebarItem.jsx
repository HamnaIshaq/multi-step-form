const SidebarItem = ({ number, stepNumber, heading }) => {  
  return (
    <li className="sidebar-list-item">
      <div className="btn flex sidebar-item-container">
        <span className="step">{number}</span>
        <span className="sidebar-item-name flex flex-vertical align-start">
          <span className="step-num">{stepNumber}</span>
          <strong className="">{heading}</strong>
        </span>
      </div>
    </li>
  );
}

export default SidebarItem;