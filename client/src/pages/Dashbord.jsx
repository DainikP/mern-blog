import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";

export default function Dashbord() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      <div className="flex-grow">
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  );
}
