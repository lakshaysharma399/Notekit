import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <HighlightIcon className="icon"/>
      <h1>noteKit</h1>
    </header>
  );
}

export default Header;
