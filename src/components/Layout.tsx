import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
