import '../assets/styles/styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list flex justify-center">
        <li className="sidebar-list-item">
          <button type="button" className="btn flex">
            <span className="step">1</span>
            <span className="sidebar-item-name flex flex-vertical align-start hide">
              <span className="step-num">Step 1</span>
              <strong className="">your info</strong>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;