import React from 'react';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>(
<ul className="NavigationItems">
    <NavigationItem link="/" >User Info</NavigationItem>
</ul>
);

export default navigationItems;