"use client"


import Sidebar from "../components/sidebar/sidebar"
import Header from "../components/header/header"
import Dashboard from "../components/dashboard/dashboard"
import Bid from "../components/bid/bid"
import Collection from "../components/collection/collection"
import Profile from "../components/profile/profile"
import Settings from "../components/settings/settings"


import React, { ReactElement } from 'react';

const Marketplace = (): ReactElement => {

    const [selectedComponent, setSelectedComponent] = React.useState('Dashboard')
    const [displayMode, setDisplayMode] = React.useState('dark')

    let containerClass
    if (displayMode === 'dark') {
        containerClass = "App"
    } else {
        containerClass = "App-lm"
    }

    return (
        <div className={containerClass}>
            <Sidebar
                selectedComponent={selectedComponent}
                changeComponent={setSelectedComponent}
                displayMode={displayMode}
            />
            <div className="container">
                <Header 
                displayMode={displayMode}
                    setDisplayMode={setDisplayMode}
                />
                {selectedComponent === 'Dashboard' && <Dashboard 
                    displayMode={displayMode}
                />}
                {selectedComponent === 'Bid' && <Bid 
                    displayMode={displayMode}
                />}
                {selectedComponent === 'Collection' && <Collection 
                    displayMode={displayMode}
                />}
                {selectedComponent === 'Profile' && <Profile 
                    displayMode={displayMode}
                />}
                {selectedComponent === 'Settings' && <Settings 
                    displayMode={displayMode}
                />}
            </div>
    </div>
    )
}

export default Marketplace;