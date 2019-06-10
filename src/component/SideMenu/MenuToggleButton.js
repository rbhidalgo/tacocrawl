import React from 'react';

import './MenuToggleButton.css'

const MenuToggleButton = ({ click }) => (
    <button className="toggle-button" onClick={click}>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
        <div className="toggle-button_line"/>
    </button>
);

export default MenuToggleButton;