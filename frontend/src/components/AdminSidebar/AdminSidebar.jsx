import React from 'react';
import { FaBars, FaPlus, FaRegMap } from 'react-icons/fa';


const AdminSidebar = ({setCurrent,current,isCollapsed,setIsCollapsed}) => {
  

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMenuItemClick = (option) => {
    setCurrent(option);
  };

  const sidebarStyle = {
    width: isCollapsed ? '60px' : '250px',
    height: '210vh',
    backgroundColor: '#ffdc00',
    color: 'black',
    transition: 'width 0.3s',
    overflow: 'hidden',
  };

  const headerStyle = {
    padding: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const iconStyle = {
    marginRight: '10px',
    width: '20px',
    height: '20px',
  };

  const toggleButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: 'black',
    fontSize: '20px',
    cursor: 'pointer',
  };



  return (
    <div style={sidebarStyle}>
      <button style={toggleButtonStyle} onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      <div style={headerStyle}>
        {!isCollapsed && 'Things2do'}
      </div>
      <hr className="border-t border-black" />


      <div>
        <div
          style={menuItemStyle}
          onClick={() => handleMenuItemClick("Add Records")}
        >
          <FaPlus style={iconStyle} />
          {!isCollapsed && <span>Add Records</span>}
        </div>
        <hr className="border-t border-black" />
        <div
          style={menuItemStyle}
          onClick={() => handleMenuItemClick("Analysis")}
        >
          <FaRegMap style={iconStyle} />
          {!isCollapsed && <span>Analysis</span>}
        </div>
        <hr className="border-t border-black" />
      </div>
      {/* <div style={{ padding: '20px', fontSize: '16px' }}>
        Current View: {current}
      </div> */}
    </div>
  );
};

export default AdminSidebar;
