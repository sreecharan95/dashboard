import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.scss';

const Sidebar: React.FC = () => {
  const menuItems = [
    { path: '/overview', label: 'Overview' },
    { path: '/reports', label: 'Reports' },
    { path: '/analytics', label: 'Analytics' },
  ];

  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          {menuItems.map(item => (
            <li key={item.path}>
              <NavLink to={item.path} className="active">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
