import React, { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import LogoImage from '../../src/images/logo.png';

const QuickLinksNav = () => {
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    window.location = `#${name}`;
  };
  return (
    <Menu secondary>
      <Menu.Item
        style={{
          padding: '10px 0'
        }}
      >
        <img
          src={LogoImage}
          alt="pine street dental spartanburg 864 582 5000 364 S Pine St suite a-101, Spartanburg, SC 29302"
          style={{ width: '280px' }}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          active={activeItem === 'call us'}
          as="a"
          href="tel:18645825000"
        >
          <Icon name="phone" size="large" color="blue" />
        </Menu.Item>
        <Menu.Item
          name="location"
          active={activeItem === 'Find Us'}
          onClick={handleItemClick}
        >
          <Icon name="map marker alternate" size="large" color="blue" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default QuickLinksNav;
