import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const Nav = props => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => {
    console.log('click: ', name);
    setActiveItem(name);
  };
  console.log('nav: ', activeItem);
  return (
    <Menu attached size="small">
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
    </Menu>
  );
};

export default Nav;
