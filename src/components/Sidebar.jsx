import React from 'react';
import '../assets/styles/styles.css';
import SidebarItem from './SidebarItem'; 

const sideBarItems = [
  {
    number: 1,
    stepNumber: "step 1",
    heading: "your info",
    path: "/"
  },
  {
    number: 2,
    stepNumber: "step 2",
    heading: "select plan",
    path:"selectplan"
  },
  {
    number: 3,
    stepNumber: "step 3",
    heading: "add-ons",
    path:"addons"
  },
  {
    number: 4,
    stepNumber: "step 4",
    heading: "summary",
    path:"summary"
  }
]

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list flex justify-center">
        { sideBarItems.map(item => {
          return (
            <SidebarItem 
              key={item.number} 
              number={item.number} 
              stepNumber={item.stepNumber} 
              heading={item.heading}
              path={item.path}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default Sidebar;