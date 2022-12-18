const SidebarItem = ({ number, stepNumber, heading, active }) => {
  return (
    <li className="sidebar-list-item">
      <button type="button" className="btn flex">
        <span className={`step ${active}`}>{number}</span>
        <span className="sidebar-item-name flex flex-vertical align-start hide">
          <span className="step-num">{stepNumber}</span>
          <strong className="">{heading}</strong>
        </span>
      </button>
    </li>
  );
}

export default SidebarItem;