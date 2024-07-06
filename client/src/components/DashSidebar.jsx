import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";

export default function DashSidebar() {
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
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to="/dashbord?tab=profile">
                    <Sidebar.Item  active={tab === "profile"} icon={HiUser} label="user" labelColor="indigo">
                        Profile
                    </Sidebar.Item>
                    </Link>
                    <Link>
                    <Sidebar.Item href="/sign-out" icon={HiArrowSmRight} className="text-white-500">
                        Sign Out
                    </Sidebar.Item>
                    </Link>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
