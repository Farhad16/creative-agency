import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavSection from '../NavSection/NavSection';

import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <NavSection></NavSection>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;