/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import RightRail from './components/RightRail';
import Footer from './components/Footer';
import FAB from './components/FAB';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav onMenuClick={toggleSidebar} />
      <div className="flex flex-1 pt-16 h-screen overflow-hidden">
        <Sidebar isCollapsed={isCollapsed} />
        <EmailList isCollapsed={isCollapsed} />
        <RightRail />
      </div>
      <Footer isCollapsed={isCollapsed} />
      <FAB />
    </div>
  );
}
