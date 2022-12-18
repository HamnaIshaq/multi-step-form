import '../assets/styles/styles.css';
import SidebarItem from './SidebarItem'; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list flex justify-center">
        <SidebarItem number="1" stepNumber="Step 1" heading="your info" active="active"/>
        <SidebarItem number="2" stepNumber="Step 2" heading="select plan" active=""/>
        <SidebarItem number="3" stepNumber="Step 3" heading="add-ons" active=""/>
        <SidebarItem number="4" stepNumber="Step 4" heading="summary" active=""/>
      </ul>
    </div>
  );
}

export default Sidebar;