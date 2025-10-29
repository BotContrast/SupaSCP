import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './hamburger.css';

function Hamburger({ scps, onSelect, onAdminClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(prev => !prev);
  const handleSelect = (scp) => {
    onSelect(scp);
    setIsOpen(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="hamburger-container" ref={menuRef}>
      <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">☰</button>

      {isOpen && (
        <div className="hamburger-dropdown right">
          <div className="dropdown-items">
            {scps.map((scp, idx) => (
              <button 
                key={idx}
                className="dropdown-item"
                onClick={() => handleSelect(scp)}
              >
                {scp.Name}
              </button>
            ))}
          </div>
          <div className="dropdown-admin">
            <Button variant="outline-primary" onClick={onAdminClick} className="admin-btn">
              Admin
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
