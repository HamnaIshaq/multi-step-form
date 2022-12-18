import '../assets/styles/styles.css';
import SidebarItem from './SidebarItem'; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list flex justify-center">
        <SidebarItem number="1" stepNumber="Step 1" heading="your info"/>
        <SidebarItem number="2" stepNumber="Step 2" heading="select plan"/>
        <SidebarItem number="3" stepNumber="Step 3" heading="add-ons"/>
        <SidebarItem number="4" stepNumber="Step 4" heading="summary"/>
      </ul>
    </div>
  );
}

export default Sidebar;