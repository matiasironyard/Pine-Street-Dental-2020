import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const Nav = props => {
  const [activeItem, setActiveItem] = useState('about');
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Menu
      attached
      size="small"
      secondary
      pointing
      style={{
        paddingTop: '15px',
        borderTop: '1px solid #dedede',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none'
      }}
    >
      <Menu.Menu position="right">
        <Menu.Item
          name="about"
          active={activeItem === 'about'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="services"
          active={activeItem === 'services'}
          onClick={handleItemClick}
        />

        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="staff"
          active={activeItem === 'staff'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="location"
          active={activeItem === 'location'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
